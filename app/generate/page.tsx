import ExamplePrompts from "@/components/generate/example-prompts";
import GenerateForm from "@/components/generate/generate-form";
import Sidebar from "@/components/generate/sidebar";

export default function GeneratePage() {
  return (
    <div className="flex min-h-screen bg-[#020817]">
      <Sidebar />
      <main className="flex-1 relative overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            What can I help you ship today?
          </h1>
          <GenerateForm />
          <ExamplePrompts />
        </div>
      </main>
    </div>
  );
}
