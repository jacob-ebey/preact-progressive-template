import { Hono } from "hono";
import { useState } from "preact/hooks";

const app = new Hono();

app.get("/", (c) =>
  c.render(
    <div class="flex min-h-screen items-center justify-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main class="text-center">
        <h1 class="text-4xl font-bold">Hello, World!</h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          Welcome to{" "}
          <a
            href="https://preact-progressive.jacob-ebey.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-900 dark:text-slate-200"
          >
            preact-progressive
          </a>
          .
        </p>
        <Counter />
      </main>
    </div>,
  ),
);

function Counter({ initial = 0 }) {
  "use client";
  const [count, setCount] = useState(initial);

  return (
    <div class="mt-8 inline-flex items-center gap-3 rounded-lg border border-slate-200 p-1 dark:border-slate-800">
      <button
        onClick={() => setCount(count - 1)}
        class="h-9 w-9 rounded-md text-lg font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
        aria-label="Decrement"
      >
        −
      </button>

      <span class="w-10 text-center text-lg font-semibold tabular-nums">{count}</span>

      <button
        onClick={() => setCount(count + 1)}
        class="h-9 w-9 rounded-md text-lg font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900"
        aria-label="Increment"
      >
        +
      </button>
    </div>
  );
}

export default app;
