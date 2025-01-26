import { getFileIcon } from "@/lib/utils";
import { ChevronRight, Folder } from "lucide-react";
import { useCallback, useState } from "react";

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
        <div key={currentPath} className="ml-4 first:ml-0">
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
