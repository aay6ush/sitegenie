"use client";

import ExamplePrompts from "@/components/generate/example-prompts";
import GenerateForm from "@/components/generate/generate-form";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useCallback } from "react";
import CodePreview from "@/components/generate/code-preview";

export default function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [files, setFiles] = useState<Record<string, string>>();
  const [showExamples, setShowExamples] = useState(true);
  const [selectedPrompt, setSelectedPrompt] = useState("");

  const handlePreviewUpdate = useCallback(
    (url: string, newFiles: Record<string, string>) => {
      setPreviewUrl(url);
      setFiles(newFiles);
    },
    []
  );

  const handlePromptSubmit = useCallback((prompt: string) => {
    setSelectedPrompt(prompt);
    setShowExamples(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#020817]">
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
            setShowExamples={setShowExamples}
            selectedPrompt={selectedPrompt}
          />
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Skeleton className="h-8 w-48 bg-white/5" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Skeleton className="h-[200px] rounded-xl bg-white/5" />
                <Skeleton className="h-[200px] rounded-xl bg-white/5" />
                <Skeleton className="h-[200px] rounded-xl bg-white/5" />
              </div>
            </motion.div>
          ) : (
            isGenerated && <CodePreview previewUrl={previewUrl} files={files} />
          )}
          {showExamples && (
            <ExamplePrompts onPromptSelect={handlePromptSubmit} />
          )}
        </div>
      </main>
    </div>
  );
}
