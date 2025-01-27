"use client";

import GenerateForm from "@/components/generate/generate-form";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useCallback } from "react";
import CodePreview from "@/components/generate/code-preview";
import { Progress } from "@/components/ui/progress";

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [files, setFiles] = useState<Record<string, string>>();
  const [progress, setProgress] = useState(0);

  const handlePreviewUpdate = useCallback(
    (url: string, newFiles: Record<string, string>) => {
      setPreviewUrl(url);
      setFiles(newFiles);
    },
    []
  );

  return (
    <div className="flex min-h-screen bg-[#020817]">
      {isLoading && (
        <Progress
          value={progress}
          className="w-full fixed top-0 left-0 z-50"
          style={{ height: "3px" }}
        />
      )}
      <main className="flex-1 relative overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          >
            What can I help you ship today?
          </motion.h1>
          <GenerateForm
            setIsLoading={setIsLoading}
            isGenerated={isGenerated}
            setIsGenerated={setIsGenerated}
            onPreviewUpdate={handlePreviewUpdate}
            setProgress={setProgress}
          />
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Skeleton className="h-11 w-52 bg-white/5" />
              <Skeleton className="h-[500px] w-[976px] rounded-xl bg-white/5" />
            </motion.div>
          ) : (
            isGenerated && <CodePreview previewUrl={previewUrl} files={files} />
          )}
        </div>
      </main>
    </div>
  );
}
