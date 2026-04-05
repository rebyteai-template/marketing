import { Composition } from "remotion";
import { RebyteIntro } from "./RebyteIntro";
import { RebyteIntroJa } from "./RebyteIntroJa";
import { Thumbnail } from "./Thumbnail";
import { ThumbnailJa } from "./ThumbnailJa";
import { RebyteExplainer, REBYTE_EXPLAINER_TOTAL_FRAMES } from "./RebyteExplainer";
import { RebyteExplainerJa, REBYTE_EXPLAINER_JA_TOTAL_FRAMES } from "./RebyteExplainerJa";
import { BrowserAutomation, BROWSER_AUTOMATION_TOTAL_FRAMES } from "./BrowserAutomation";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="RebyteIntro"
        component={RebyteIntro}
        durationInFrames={3435}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RebyteIntroJa"
        component={RebyteIntroJa}
        durationInFrames={4873}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RebyteExplainer"
        component={RebyteExplainer}
        durationInFrames={REBYTE_EXPLAINER_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RebyteExplainerSquare"
        component={RebyteExplainer}
        durationInFrames={REBYTE_EXPLAINER_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="Thumbnail"
        component={Thumbnail}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RebyteExplainerJa"
        component={RebyteExplainerJa}
        durationInFrames={REBYTE_EXPLAINER_JA_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BrowserAutomation"
        component={BrowserAutomation}
        durationInFrames={BROWSER_AUTOMATION_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ThumbnailJa"
        component={ThumbnailJa}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
