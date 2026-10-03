import { Hono } from "hono";
import { dynamicDataResponses, preactRenderer } from "hono-preact-progressive";

import { Shell } from "./shell";
import marketing from "./controllers/marketing";

const app = new Hono();

app.use(
  dynamicDataResponses(),
  preactRenderer(({ children }) => <Shell>{children}</Shell>),
);

app.route("", marketing);

export default app;
