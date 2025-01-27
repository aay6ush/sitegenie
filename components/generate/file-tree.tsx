import { ChevronRight, File, Folder } from "lucide-react";
import { ReactElement, useCallback, useState } from "react";

export const FILE_ICONS: Record<string, ReactElement> = {
  js: <File className="h-4 w-4 text-yellow-400" />,
  jsx: <File className="h-4 w-4 text-yellow-400" />,
  ts: <File className="h-4 w-4 text-blue-400" />,
  tsx: <File className="h-4 w-4 text-blue-400" />,

  css: <File className="h-4 w-4 text-purple-400" />,
  html: <File className="h-4 w-4 text-orange-400" />,

  json: <File className="h-4 w-4 text-red-400" />,

  default: <File className="h-4 w-4 text-gray-400" />,
};

export function getFileIcon(fileName: string) {
  if (fileName in FILE_ICONS) {
    return FILE_ICONS[fileName];
  }

  const extension = fileName.split(".").pop()?.toLowerCase() || "";
  return FILE_ICONS[extension] || FILE_ICONS.default;
}

export default function FileTree({
  files,
  onSelectFile,
}: {
  files: FileNode[];
  onSelectFile: (file: FileNode) => void;
}) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);

  const toggleFolder = useCallback((path: string) => {
    setExpandedFolders((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  }, []);

  const renderNode = useCallback(
    (node: FileNode, path = "") => {
      const currentPath = `${path}/${node.name}`;
      const isExpanded = expandedFolders.includes(currentPath);
      const isFolder = node.type === "folder";

      return (
        <div key={currentPath} className="ml-4">
          <div
            className="flex items-center gap-2 py-1.5 cursor-pointer hover:bg-gray-800/50 rounded px-2 transition-colors duration-150 group"
            onClick={() =>
              isFolder ? toggleFolder(currentPath) : onSelectFile(node)
            }
          >
            {isFolder && (
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-150 text-gray-400 group-hover:text-gray-300 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            )}
            {isFolder ? (
              <Folder
                className={`h-4 w-4 ${
                  isExpanded ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            ) : (
              getFileIcon(node.name)
            )}
            <span className="text-sm text-gray-300 group-hover:text-white">
              {node.name}
            </span>
          </div>
          {isFolder && isExpanded && (
            <div className="ml-2 border-l border-gray-800">
              {node.children?.map((child) => renderNode(child, currentPath))}
            </div>
          )}
        </div>
      );
    },
    [expandedFolders, onSelectFile, toggleFolder]
  );

  return (
    <div className="py-2 text-sm space-y-1">
      {files.map((file) => renderNode(file))}
    </div>
  );
}
