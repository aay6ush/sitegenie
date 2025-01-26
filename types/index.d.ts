declare type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string[];
  accentColor: string;
  buttonColor: string;
};

declare type TestimonialCardProps = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

declare type PricingPlanCard = {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isPopular: boolean;
  features: string[];
  isYearly: boolean;
};

declare type FileListItem = {
  name: string;
  content: string;
};

declare type FileTreeProps = {
  files: FileListItem[];
  activeFile?: string;
  onFileSelect: (filename: string) => void;
};

declare type CodePreviewProps = {
  previewUrl?: string;
  files?: {
    [key: string]: string;
  };
};

declare type Message = {
  role: "user" | "assistant";
  content: string;
};

declare type ChatProps = {
  generationId: string;
  onPreviewUpdate?: (url: string, files: Record<string, string>) => void;
};

declare type SiteAction = {
  type: "file" | "shell";
  filePath?: string;
  content: string;
};

declare type GenerateFormProps = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isGenerated: boolean;
  setIsGenerated: Dispatch<SetStateAction<boolean>>;
  onPreviewUpdate: (url: string, newFiles: Record<string, string>) => void;
  setShowExamples: Dispatch<SetStateAction<boolean>>;
  selectedPrompt: string;
};

declare type Message = {
  role: "user" | "assistant";
  content: string;
};

declare type FileNode = {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  content?: string;
};

declare type CodePreviewProps = {
  previewUrl?: string;
  files?: Record<string, string>;
};

declare type WebContainerFile = {
  file: {
    contents: string;
  };
};

declare type WebContainerDirectory = {
  directory: Record<string, WebContainerFile | WebContainerDirectory>;
};

declare type ExamplePromptsProps = {
  onPromptSelect: (prompt: string) => void;
};
