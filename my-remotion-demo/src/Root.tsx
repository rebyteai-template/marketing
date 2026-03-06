import { Composition } from "remotion";
import { RebyteIntro } from "./RebyteIntro";
import { Thumbnail } from "./Thumbnail";
import { EiffelTowerExplainer, EIFFEL_TOTAL_FRAMES } from "./EiffelTower";
import { AgentSkillExplainer, AGENT_SKILL_TOTAL_FRAMES } from "./AgentSkill";
import { TransformExplainer, TRANSFORM_TOTAL_FRAMES } from "./TransformExplainer";

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
        id="EiffelTower"
        component={EiffelTowerExplainer}
        durationInFrames={EIFFEL_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AgentSkill"
        component={AgentSkillExplainer}
        durationInFrames={AGENT_SKILL_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TransformExplainer"
        component={TransformExplainer}
        durationInFrames={TRANSFORM_TOTAL_FRAMES}
        fps={30}
        width={1920}
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
    </>
  );
};
