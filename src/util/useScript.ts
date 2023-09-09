import { useState, useEffect } from "react";

let cachedScripts = [];

export default function useScript(src): [loaded: boolean, error: string | undefined] {
  // Keeping track of script loaded and error state
  const [state, setState] = useState<{
    loaded: boolean,
    error: string | undefined
  }>({
    loaded: false,
    error: undefined
  });

  useEffect(
    () => {
      // If cachedScripts array already includes src that means another instance ...
      // ... of this hook already loaded this script, so no need to load again.
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: undefined
        });
      } else {
        cachedScripts.push(src);

        // Create script
        let script = document.createElement("script");
        script.src = src;
        script.async = true;

        // Script event listener callbacks for load and error
        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: undefined
          });
        };

        const onScriptError = () => {
          // Remove from cachedScripts we can try loading again
          const index = cachedScripts.indexOf(src);
          if (index >= 0) cachedScripts.splice(index, 1);
          script.remove();

          setState({
            loaded: true,
            error: "Couldn't load yandex maps data script"
          });
        };

        script.addEventListener("load", onScriptLoad);
        script.addEventListener("error", onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return () => {
          script.removeEventListener("load", onScriptLoad);
          script.removeEventListener("error", onScriptError);
        };
      }
    },
    [src] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}
