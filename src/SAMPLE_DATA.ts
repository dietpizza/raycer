export const SAMPLE_PLAN_DATA = {
  userQuery: {
    summary:
      "You know how in some repos i see import K from '@/components', I wanna do that, src is the root -- @. please do it for me",
  },
  planSpec: {
    iterations: [
      {
        observation: {
          summary:
            "This is a Vite + React + TypeScript project that currently doesn't have path aliases configured. The user wants to set up the '@' alias to point to the 'src/' directory, enabling imports like import Component from '@/components' instead of relative paths like '../../components'.",
          parts: [
            "Configure Vite to resolve the '@' alias to the src directory",
            "Configure TypeScript to understand the '@' alias for type checking and IntelliSense",
            "Path aliases using '@/' for imports",
          ],
        },
        approach: {
          summary:
            "The implementation requires configuring both Vite and TypeScript to recognize the '@' alias:",
          parts: [
            "Vite Configuration: Add the resolve.alias option in vite.config.ts to map '@' to the src directory using Node's path module",
            "TypeScript Configuration: Add baseUrl and paths compiler options in 'tsconfig.app.json' to enable TypeScript to resolve the '@' alias for type checking and IDE support",
          ],
        },
        perFileChanges: [
          {
            fileName: "tsconfig.app.json",
            details: {
              summary:
                "Update the TypeScript configuration to recognize the '@' path alias:",
              parts: ["Add 'baseUrl' and paths to the compiler object:"],
            },
          },
          {
            fileName: "vite.config.js",
            details: {
              summary:
                "Update the Vite configuration to add path alias resolution:",
              parts: [
                "Import the path module ar the top of the file",
                "Add the resolve option to the defineConfig object with an alias configuration that maps '@' to the src directory",
              ],
            },
          },
        ],
      },
    ],
  },
};
