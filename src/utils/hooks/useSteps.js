import Introduction from "components/steps/Introduction";
import MethodicalApproach from "components/steps/MethodicalApproach";
import ProjectStatus from "components/steps/ProjectStatus";
import Prospect from "components/steps/Prospect";
import Reflexion from "components/steps/Reflexion";
import { STEPS } from "const/app";
import { useMemo } from "react";

const useSteps = () => {
  const steps = useMemo(() => {
    const data = {};
    data[STEPS.INTRODUCTION] = <Introduction />;
    data[STEPS.METHODICAL_APPROACH] = <MethodicalApproach />;
    data[STEPS.PROJECT_STATUS] = <ProjectStatus />;
    data[STEPS.REFLEXION] = <Reflexion />;
    data[STEPS.PROSPECT] = <Prospect />;
    return data;
  }, []);

  return steps;
};

export default useSteps;
