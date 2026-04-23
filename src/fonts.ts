import { loadFont } from "@remotion/google-fonts/Montserrat";

// MedMe brand typography: Montserrat Medium (500) for body, Bold (700) for
// subheads/callouts. The user asked for Montserrat on every surface.
const { fontFamily: montserrat } = loadFont("normal", {
  weights: ["500", "600", "700"],
  subsets: ["latin"],
});

export const FONT_FAMILY = `${montserrat}, system-ui, sans-serif`;
