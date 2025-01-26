import { motion } from "framer-motion";
import { Copy, Eye, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useCallback, useMemo } from "react";
import { convertToFileTree } from "@/lib/utils";
import FileTree from "./file-tree";

function CodeHighlight({ code }: { code: string }) {
  return (
    <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed overflow-x-auto">
      <code className="language-typescript">{code}</code>
    </pre>
  );
}

export default function CodePreview({ previewUrl, files }: CodePreviewProps) {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const fileTree = useMemo(
    () => (files ? convertToFileTree(files) : []),
    [files]
  );
  const [iframeError, setIframeError] = useState(false);

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
                  {previewUrl || "localhost:3000"}
                </div>
              </div>
            </div>
            <div className="bg-white relative min-h-[400px]">
              {iframeError ? (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Failed to load preview. Please try again.
                </div>
              ) : (
                <iframe
                  src={previewUrl}
                  className="w-full h-full min-h-[400px]"
                  title="Landing Page Preview"
                  sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
                  allow="cross-origin-isolated"
                  onError={() => setIframeError(true)}
                  onLoad={() => setIframeError(false)}
                />
              )}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-6">
          <div className="rounded-xl border border-white/10 bg-gray-900 overflow-hidden">
            <div className="flex">
              <div className="w-64 border-r border-gray-800 p-4 bg-gray-950">
                <FileTree files={fileTree} onSelectFile={setSelectedFile} />
              </div>
              <div className="flex-1 overflow-hidden">
                {selectedFile ? (
                  <div className="relative h-full">
                    <div className="absolute top-4 right-4 z-10">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-gray-300 hover:text-white hover:bg-gray-800 border-gray-700"
                        onClick={() =>
                          copyToClipboard(selectedFile.content || "")
                        }
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy code
                      </Button>
                    </div>
                    <div className="p-4 h-full overflow-auto">
                      <CodeHighlight code={selectedFile.content || ""} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[400px] text-gray-400">
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
