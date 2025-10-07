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
      {
        observation: {
          summary:
            "This is a Vite + React + TypeScript project without path alias configuration. The user wants the '@' alias pointing to 'src/' for cleaner imports like import Button from '@/components/Button' instead of using relative paths with multiple parent directory references.",
          parts: [
            "Set up Vite's resolve.alias to handle '@' path mapping",
            "Configure TypeScript compilerOptions for '@' alias recognition",
            "Enable path aliasing for '@/' import pattern",
          ],
        },
        approach: {
          summary:
            "Configure both the bundler and type system to support '@' as an alias for the src directory:",
          parts: [
            "Vite Configuration: Utilize vite.config.ts resolve.alias property to create a mapping from '@' to the absolute path of src folder using path.resolve(__dirname, './src')",
            "TypeScript Configuration: Modify 'tsconfig.app.json' compilerOptions to include baseUrl set to '.' and paths object mapping '@/*' to ['./src/*'] for proper type inference",
          ],
        },
        perFileChanges: [
          {
            fileName: "tsconfig.app.json",
            details: {
              summary:
                "Configure TypeScript to handle '@' alias for type checking:",
              parts: [
                "Add baseUrl property set to '.' in compilerOptions",
                "Define paths mapping with '@/*' pointing to ['./src/*']",
              ],
            },
          },
          {
            fileName: "vite.config.js",
            details: {
              summary:
                "Set up Vite to resolve '@' imports during build and dev:",
              parts: [
                "Import path from 'path' and __dirname helper at the top",
                "Configure resolve.alias in defineConfig with '@' mapped to path.resolve(__dirname, './src')",
              ],
            },
          },
        ],
      },
      {
        observation: {
          summary:
            "This is a Vite + React + TypeScript project lacking path alias setup. The user desires implementing '@' as an alias for 'src/' to avoid complex relative import statements like '../../../components' and instead use cleaner syntax like '@/components'.",
          parts: [
            "Configure Vite bundler to recognize '@' as src directory alias",
            "Update TypeScript settings to support '@' path resolution",
            "Implement '@/' prefix for all src-relative imports",
          ],
        },
        approach: {
          summary:
            "Set up path aliasing by configuring both Vite's module resolution and TypeScript's path mapping:",
          parts: [
            "Vite Configuration: Modify vite.config.ts by adding a resolve section with alias configuration that maps the '@' symbol to the src directory using fileURLToPath and URL for ESM compatibility",
            "TypeScript Configuration: Update 'tsconfig.app.json' to add baseUrl and paths in compilerOptions, mapping '@/*' array to ['src/*'] array for IDE IntelliSense and type validation",
          ],
        },
        perFileChanges: [
          {
            fileName: "tsconfig.app.json",
            details: {
              summary:
                "Modify TypeScript configuration for '@' path alias support:",
              parts: [
                "Set compilerOptions.baseUrl to current directory",
                "Add compilerOptions.paths with '@/*' mapping to src/*",
              ],
            },
          },
          {
            fileName: "vite.config.js",
            details: {
              summary: "Configure Vite's module resolver to handle '@' alias:",
              parts: [
                "Import necessary path utilities (fileURLToPath, URL) for ESM support",
                "Add resolve configuration with alias object mapping '@' to src directory path",
              ],
            },
          },
        ],
      },
      {
        observation: {
          summary:
            "This is a Vite + React + TypeScript project that needs path alias configuration. The user wants '@' to serve as an alias for 'src/' directory, allowing imports like import Header from '@/components/Header' rather than navigating with relative paths like '../../components/Header'.",
          parts: [
            "Add Vite alias configuration for '@' pointing to src",
            "Configure TypeScript compiler to recognize '@' path mapping",
            "Enable '@/' import prefix throughout the project",
          ],
        },
        approach: {
          summary:
            "Implement path aliasing through coordinated Vite and TypeScript configuration changes:",
          parts: [
            "Vite Configuration: Edit vite.config.ts to include resolve.alias settings, creating an alias entry for '@' that resolves to the src directory using Node's path.join with __dirname",
            "TypeScript Configuration: Adjust 'tsconfig.app.json' by setting baseUrl to the project root and adding paths configuration that maps '@/*' to ['src/*'] for editor support and type checking",
          ],
        },
        perFileChanges: [
          {
            fileName: "tsconfig.app.json",
            details: {
              summary:
                "Update TypeScript config to enable '@' alias resolution:",
              parts: [
                "Add baseUrl: '.' to compilerOptions",
                "Configure paths with '@/*': ['src/*'] mapping",
              ],
            },
          },
          {
            fileName: "vite.config.js",
            details: {
              summary:
                "Modify Vite configuration to process '@' alias imports:",
              parts: [
                "Import path module from Node.js at file beginning",
                "Add resolve.alias to defineConfig with '@' pointing to path.join(__dirname, 'src')",
              ],
            },
          },
        ],
      },
    ],
  },
};
