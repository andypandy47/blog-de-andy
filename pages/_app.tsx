import "../styles/globals.scss";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  if (process.env.NODE_ENV === "production") {
    if(typeof window !== "undefined") {
      const noop = (): void => undefined;
      const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

      if (typeof DEV_TOOLS === 'object') {
        for (const [key, value] of Object.entries(DEV_TOOLS)) {
            DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
        }
      }
      console.log("disabled dev tools");
    }
  }
    
  if (process.env.NODE_ENV === "development") {
      console.log("dev environment");
  }

  return <Component {...pageProps} />;
};

export default App;
