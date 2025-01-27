import { motion } from "framer-motion";
import { Copy, Eye, Code, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useCallback, useMemo, useEffect } from "react";
import { convertToFileTree } from "@/lib/utils";
import FileTree from "./file-tree";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

function getLanguageFromFileName(fileName: string): string {
  const extension = fileName?.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "ts":
      return "typescript";
    case "tsx":
      return "tsx";
    case "js":
      return "javascript";
    case "jsx":
      return "jsx";
    case "css":
      return "css";
    case "json":
      return "json";
    default:
      return "typescript";
  }
}

function CodeHighlight({
  code,
  fileName,
}: {
  code: string;
  fileName?: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const language = getLanguageFromFileName(fileName || "");

  return (
    <pre className="font-mono !text-base leading-relaxed overflow-x-auto !bg-transparent no-scrollbar">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

export default function CodePreview({ previewUrl, files }: CodePreviewProps) {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const fileTree = useMemo(
    () => (files ? convertToFileTree(files) : []),
    [files]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  const copyToClipboard = useCallback(async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="h-11 inline-flex bg-black/40 backdrop-blur-sm border border-white/10">
          <TabsTrigger
            value="preview"
            className="py-2 font-medium transition-all data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Eye className="mr-2 size-5" />
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="py-2 font-medium transition-all data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Code className="mr-2 size-5" />
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-6">
          <div className="rounded-xl border border-gray-700 bg-gray-800 shadow-lg overflow-hidden">
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  {"http://localhost:3000"}
                </div>
              </div>
            </div>
            <div className="bg-white relative min-h-[500px]">
              <iframe
                src={previewUrl}
                className="w-full h-full min-h-[500px]"
                title="Landing Page Preview"
                sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                allow="cross-origin-isolated"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="size-16 animate-spin text-purple-500" />
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-6">
          <div className="rounded-xl border border-white/10 bg-gray-900 overflow-hidden">
            <div className="flex">
              <div className="w-64 border-r border-gray-800 p-4 bg-gray-950 h-[500px] max-h-[500px] overflow-auto no-scrollbar">
                <FileTree files={fileTree} onSelectFile={setSelectedFile} />
              </div>
              <div className="flex-1 overflow-hidden">
                {selectedFile ? (
                  <div className="relative h-full max-h-[500px] no-scrollbar">
                    <div className="absolute top-4 right-4 z-10">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          copyToClipboard(selectedFile.content || "");
                          const button =
                            document.activeElement as HTMLButtonElement;
                          button.textContent = "Copied!";
                          setTimeout(() => {
                            button.innerHTML =
                              '<svg viewBox="0 0 24 24" class="h-4 w-4"><path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.912 4.895 3 6 3h8c1.105 0 2 .912 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.088 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Copy';
                          }, 2000);
                        }}
                      >
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                    <div className="p-4 h-full overflow-auto no-scrollbar">
                      <CodeHighlight
                        code={selectedFile.content || ""}
                        fileName={selectedFile.name}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    Select a file to view its contents
                  </div>
                )}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
