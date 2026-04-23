import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The player imports the composition from ../src. Those parent files also
// import from `remotion` and `@remotion/google-fonts` — packages that only
// exist in the ROOT node_modules, not here. Cloudflare only installs
// player/node_modules by default, so the Cloudflare build script is
// responsible for also running `npm install --prefix ..` to populate the
// parent's node_modules before `vite build` runs. Locally both exist already.
//
// `dedupe` ensures only one copy of Remotion/React is ever loaded — otherwise
// useCurrentFrame would run against a different Remotion instance than the
// one <Player> registered with, and throw at runtime.
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "remotion"],
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
