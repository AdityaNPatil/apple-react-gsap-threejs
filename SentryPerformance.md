# Getting analysis metrics for website
[Sentry](https://sentry.io/welcome/)
- Choose get started 
- Choose platform you want to monitor > React
- Configure SDK

## Error Monitoring / Tracing / Session Replay
- Follow steps shown
    - `npm install --save @sentry/react`
    - Initialize sentry in app lifecycle -- main.jsx
    ```javascript
    import * as Sentry from "@sentry/react";
    
    Sentry.init({
      dsn: "https://1f8c01254c580f44bd0f5812a94c198f@o4508496173400064.ingest.us.sentry.io/4508496177004544",
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      // Tracing
      tracesSampleRate: 1.0, //  Capture 100% of the transactions
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
    
    const container = document.getElementById(“app”);
    const root = createRoot(container);
    root.render(<App />);
    ```
    
    - Upload Source Maps  to enable readable stack traces for Errors `npx @sentry/wizard@latest -i sourcemaps --saas`
    - Wrap App.jsx with Sentry
    ```javascript
    // Import Sentry
    import * as Sentry from "@sentry/react";
    
    function App() {
    
      return (
        <main className='bg-black'>
          <Navbar/>
          <Hero/>
          <Highlights/>
          <Model/>
        </main>
      )
    }
    
    export default Sentry.withProfiler(App);
    ```
    
    
    