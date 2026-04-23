import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PatientConcierge"
      component={MyComposition}
      durationInFrames={450}
      fps={30}
      width={820}
      height={900}
    />
  );
};
