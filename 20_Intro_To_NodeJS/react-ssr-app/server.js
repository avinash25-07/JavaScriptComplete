import React from 'react'; // <--- ADD THIS LINE HERE
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in SSR mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Catch-all route using an Express 5 compatible regular expression
  app.get(/^(?!\/src\/|\/node_modules\/|\/@vite\/).*/, async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      // 2. Apply Vite HTML transforms (injects source maps, HMR client)
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the SSR entry point dynamically
      const { renderToString } = await import('react-dom/server');
      const { default: App } = await vite.ssrLoadModule('/src/App.jsx');

      // 4. Render the component to HTML string
      const appHtml = renderToString(React.createElement(App));

      // 5. Inject the app HTML into the template placeholders
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5173, () => {
    console.log('Server is running at http://localhost:5173');
  });
}

createServer();
