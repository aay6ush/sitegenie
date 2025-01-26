import { FILE_ICONS } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseSiteArtifact(message: string): SiteAction[] {
  const actions: SiteAction[] = [];
  const artifactMatch = message.match(/<siteArtifact[\s\S]*?<\/siteArtifact>/);

  if (!artifactMatch) return actions;

  const fileMatches = artifactMatch[0].matchAll(
    /<siteAction type="file"(?:\s+filePath="([^"]*)")?>([\s\S]*?)<\/siteAction>/g
  );

  for (const match of fileMatches) {
    const [, filePath, content] = match;
    let cleanContent = content.trim();
    cleanContent = cleanContent.replace(/```[\w]*\n/g, "");
    cleanContent = cleanContent.replace(/```$/gm, "");

    actions.push({
      type: "file",
      filePath: filePath || undefined,
      content: cleanContent.trim(),
    });
  }

  const shellMatches = artifactMatch[0].matchAll(
    /<siteAction type="shell">([\s\S]*?)<\/siteAction>/g
  );

  for (const match of shellMatches) {
    const [, content] = match;
    actions.push({
      type: "shell",
      content: content.trim(),
    });
  }

  return actions;
}

export function getFileIcon(fileName: string) {
  if (fileName in FILE_ICONS) {
    return FILE_ICONS[fileName];
  }

  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  return FILE_ICONS[extension] || FILE_ICONS.default;
}

export function convertToFileTree(files: Record<string, string>) {
  const root: FileNode[] = [];

  for (const [path, content] of Object.entries(files)) {
    const parts = path.split("/");
    let currentLevel = root;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;
      const existing = currentLevel.find((node) => node.name === part);

      if (existing) {
        if (!isFile) {
          currentLevel = existing.children!;
        }
      } else {
        const newNode: FileNode = isFile
          ? { name: part, type: "file", content }
          : { name: part, type: "folder", children: [] };

        currentLevel.push(newNode);
        if (!isFile) {
          currentLevel = newNode.children!;
        }
      }
    });
  }

  const sortNodes = (nodes: FileNode[]): FileNode[] => {
    return nodes
      .sort((a, b) => {
        if (a.type !== b.type) {
          return a.type === "folder" ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      })
      .map((node) => {
        if (node.type === "folder" && node.children) {
          return { ...node, children: sortNodes(node.children) };
        }
        return node;
      });
  };

  return sortNodes(root);
}
