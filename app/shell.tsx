import type { ComponentChildren } from "preact";

import "./styles.css";
import clientAssets from "./entry.client.ts?assets=client";
import shellAssets from "./shell.tsx?assets=ssr";

const assets = shellAssets.merge(clientAssets);

export function Shell({ children }: { children?: ComponentChildren }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {assets.css.map((file) => (
          <link rel="stylesheet" href={file.href} />
        ))}
        {assets.entry ? <script async type="module" src={assets.entry} /> : null}
      </head>
      <body class="min-h-screen">{children}</body>
    </html>
  );
}
