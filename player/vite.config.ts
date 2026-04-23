import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The player imports the Remotion composition from ../src, which lives above
// this app's root. `fs.allow: [".."]` lets Vite serve those files in dev, and
// the build bundles them like any other import.
export default defineConfig({
  plugins: [react()],
  // The composition under ../src imports from `remotion` and `react`. Those
  // packages exist both here (player/node_modules) and in the parent
  // (../node_modules). Dedupe so only this app's copy is ever loaded —
  // otherwise useCurrentFrame runs against a different Remotion instance than
  // the one <Player> registers with, and throws.
  resolve: {
    dedupe: ["react", "react-dom", "remotion"],
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
