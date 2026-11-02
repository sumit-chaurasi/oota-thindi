import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const markup = renderToString(React.createElement(App));
  const htmlPath = new URL("../dist/index.html", import.meta.url);
  const html = await readFile(htmlPath, "utf8");
  const prerendered = html.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );

  if (prerendered === html) {
    throw new Error('Could not find the root element in dist/index.html');
  }

  await writeFile(htmlPath, prerendered);
} finally {
  await vite.close();
}
