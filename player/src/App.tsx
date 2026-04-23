import { Player } from "@remotion/player";
import { MyComposition } from "../../src/Composition";

// Composition constants — keep in sync with src/Root.tsx.
const DURATION_IN_FRAMES = 450;
const FPS = 30;
const WIDTH = 820;
const HEIGHT = 900;

export const App: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <Player
        component={MyComposition}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        compositionWidth={WIDTH}
        compositionHeight={HEIGHT}
        autoPlay
        loop
        controls={false}
        clickToPlay={false}
        doubleClickToFullscreen={false}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
    </div>
  );
};
