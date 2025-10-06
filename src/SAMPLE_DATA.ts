export const SAMPLE_PLAN_DATA = {
  userQuery: {
    summary:
      "Install `react-router-dom` package, create routes `/` and `/plans/:id`.",
    parts: [
      "Install `react-router-dom` package in `package.json`",
      "Wrap `<App />` with `<BrowserRouter>` in `src/main.tsx`",
      "Update `src/App.tsx` to use `Routes` and `Route` components for `/` and `/pages/:id` paths",
      "Create page components in `src/pages/` that render `ScreenFrame` component (inline types, no separate type files)",
    ],
  },
  planSpec: {
    iterations: [
      {
        observation: {
          summary: "I examined the current project structure and found:",
          parts: [
            "Named exports for components",
            "TypeScript prop types defined as separate types",
            "Path aliases using @/ for imports",
            "Index files (index.ts) for re-exporting components from directories",
            "DaisyUI classes are already in use (e.g., textarea, btn, btn-neutral in home-page.tsx)",
          ],
        },
        approach: {
          summary:
            "I'll create a custom auto-resizing textarea component that:",
          parts: [
            "Creates the components/ui/ directory structure with the new text-area.tsx component and an index.ts for exports",
            "Implements auto-resize functionality using React hooks (useRef, useEffect) to dynamically adjust the textarea height based on content",
            "Applies DaisyUI styling using the textarea class from DaisyUI for consistent theming",
            "Sets a max-height constraint with overflow handling when content exceeds the limit",
            "Forwards all standard textarea props using TypeScript's React.TextareaHTMLAttributes for full flexibility",
            "Follows project conventions with named exports, TypeScript types, and the established component structure",
          ],
        },
        perFileChanges: [
          {
            fileName: "src/App.tsx",
            details: {
              summary:
                "I'll create a custom auto-resizing textarea component that",
            },
          },
          {
            fileName: "src/App2.tsx",
            details: {
              summary:
                "I'll create a custom auto-resizing textarea component that",
            },
          },
          {
            fileName: "src/App4.tsx",
            details: {
              summary:
                "I'll create a custom auto-resizing textarea component that",
            },
          },
        ],
      },
    ],
  },
};
