import Document, { DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    if (process.env.NODE_ENV === "production") {
        const noop = (): void => undefined;
        const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
    
        if (typeof DEV_TOOLS === 'object') {
          for (const [key, value] of Object.entries(DEV_TOOLS)) {
              DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
          }
        }
        console.log("disabled dev tools");
    }
      
    if (process.env.NODE_ENV === "development") {
    console.log("dev environment");
    }

    return initialProps
  }
}

export default MyDocument