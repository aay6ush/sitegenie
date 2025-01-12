"use client";

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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  prompt: z
    .string()
    .min(10, "Your prompt should be at least 10 characters long")
    .max(1000, "Your prompt is too long. Please keep it under 1000 characters"),
});

export default function GenerateForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      router.push(`/generate/123`);
    } catch (error) {
      console.error(error);
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
          className="relative"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Describe your website and watch the magic happen..."
                    className="!text-lg p-4 min-h-[120px] w-full bg-black/20 border-white/[0.08] hover:border-white/[0.12] focus:border-purple-500/50 rounded-xl resize-none text-white placeholder:text-white/40 shadow-xl shadow-purple-500/5 focus:shadow-purple-500/10 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="absolute text-sm text-red-500 mt-2" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isSubmitting || !form.formState.isValid}
            className="absolute right-4 bottom-4 rounded-lg bg-purple-500 hover:bg-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
