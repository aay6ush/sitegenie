import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useWebContainer from "@/hooks/web-container";
import { parseSiteArtifact } from "@/lib/utils";
import { BASE_PROMPT, reactBasePrompt } from "@/constants/prompts";
import { BorderBeam } from "../ui/border-beam";

const formSchema = z.object({
  prompt: z
    .string()
    .min(10, "Your prompt should be at least 10 characters long")
    .max(1000, "Your prompt is too long. Please keep it under 1000 characters"),
});

export default function GenerateForm({
  setIsLoading,
  setIsGenerated,
  onPreviewUpdate,
  setProgress,
}: GenerateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([
    {
      role: "user" as const,
      content: BASE_PROMPT,
    },
    {
      role: "user" as const,
      content: `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
    },
  ]);
  const instance = useWebContainer();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.prompt.trim() || isSubmitting) return;

    try {
      setError(null);
      setIsSubmitting(true);
      setIsLoading(true);
      setIsGenerated(true);
      setProgress(10);

      if (!instance) {
        throw new Error("WebContainer is not initialized");
      }

      const userMessage: Message = {
        role: "user",
        content: values.prompt,
      };

      const updatedHistory = [...conversationHistory, userMessage];
      setConversationHistory(updatedHistory);
      setProgress(20);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: values.prompt,
          history: updatedHistory,
          isFollowUp: conversationHistory.length > 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setProgress(40);

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setProgress(50);

      setConversationHistory([
        ...updatedHistory,
        {
          role: "model",
          content: data.message,
        },
      ]);

      const baseActions = parseSiteArtifact(reactBasePrompt);
      const baseFiles: Record<string, string> = {};
      for (const action of baseActions) {
        if (action.type === "file" && action.filePath) {
          baseFiles[action.filePath] = action.content;
        }
      }

      setProgress(60);

      const generatedActions = parseSiteArtifact(data.message);
      const generatedFiles: Record<string, string> = {};
      for (const action of generatedActions) {
        if (action.type === "file" && action.filePath) {
          generatedFiles[action.filePath] = action.content;
        }
      }

      const files = { ...baseFiles, ...generatedFiles };
      setProgress(70);

      type FileSystemTree = Record<
        string,
        WebContainerFile | WebContainerDirectory
      >;

      const fileSystem: FileSystemTree = {};

      for (const [path, content] of Object.entries(files)) {
        const parts = path.split("/");
        let current = fileSystem;

        for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i];
          if (!current[part] || !("directory" in current[part])) {
            current[part] = { directory: {} };
          }
          current = (current[part] as WebContainerDirectory).directory;
        }

        const fileName = parts[parts.length - 1];
        current[fileName] = { file: { contents: content } };
      }

      await instance.mount(fileSystem);
      setProgress(80);

      const installProcess = await instance.spawn("npm", ["install"]);
      const installExitCode = await installProcess.exit;

      if (installExitCode !== 0) {
        throw new Error("Failed to install dependencies");
      }

      setProgress(90);

      await instance.spawn("npm", ["run", "dev"]);

      instance.on("server-ready", (port, url) => {
        onPreviewUpdate?.(url, files);
        setProgress(100);
        setIsLoading(false);
      });

      form.reset();
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      setIsLoading(false);
      setIsGenerated(false);
      setProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={
                      conversationHistory.length > 2
                        ? "What would you like to change in your website?"
                        : "Describe your website and watch the magic happen..."
                    }
                    className="no-scrollbar !text-lg p-4 min-h-[120px] w-full bg-black/20 border-white/[0.08] hover:border-white/[0.12] focus:border-purple-500/50 rounded-xl resize-none text-white placeholder:text-white/40 shadow-xl shadow-purple-500/5 focus:shadow-purple-500/10 transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage className="absolute text-sm text-red-500 mt-2" />
              </FormItem>
            )}
          />
          {error && (
            <div className="absolute text-sm text-red-500 mt-2">{error}</div>
          )}
          <Button
            type="submit"
            size="icon"
            disabled={isSubmitting || !form.formState.isValid}
            className="absolute right-4 bottom-4 rounded-lg bg-purple-500 hover:bg-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
          <BorderBeam className="rounded-xl" />
        </motion.div>
      </form>
    </Form>
  );
}
