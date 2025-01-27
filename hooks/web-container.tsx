import { WebContainer } from "@webcontainer/api";
import { useCallback, useEffect, useState } from "react";

export default function useWebContainer() {
  const [instance, setInstance] = useState<WebContainer | null>(null);

  const init = useCallback(async () => {
    if (!instance) {
      const webContainer = await WebContainer.boot();
      setInstance(webContainer);
    }
  }, [instance]);

  useEffect(() => {
    init();
  }, [init]);

  return instance;
}
