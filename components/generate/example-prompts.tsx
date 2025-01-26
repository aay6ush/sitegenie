import { motion } from "framer-motion";
import { promptExamples } from "@/constants";

export default function ExamplePrompts({
  onPromptSelect,
}: ExamplePromptsProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-3xl">✨</span> Try these example prompts
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        {promptExamples.map((example, index) => (
          <motion.div
            key={example.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onClick={() => onPromptSelect(example.prompt)}
            className="cursor-pointer"
          >
            <div className="max-w-sm h-auto p-5 bg-black/20 hover:bg-black/40 rounded-xl flex items-start text-left transition-all duration-200 border border-white/[0.08] hover:border-white/[0.12] space-x-3">
              {example.icon}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-white/70 text-sm truncate">
                    {example.name}
                  </h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                  {example.prompt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
