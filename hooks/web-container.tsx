import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";

export default function useWebContainer() {
  const [instance, setInstance] = useState<WebContainer | null>(null);

  async function init() {
    if (instance) return;

    const webContainer = await WebContainer.boot();
    setInstance(webContainer);
  }

  useEffect(() => {
    init();
  }, []);

  return instance;
}
