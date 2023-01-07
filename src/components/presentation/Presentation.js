import { useRecoilValue } from "recoil";
import { pageTitle, progressBar } from "state/app";
import Navigation from "utils/Navigation";
import ProgressBar from "utils/ProgressBar";
import StepOne from "./StepOne";

const steps = {
  1: <StepOne />,
  2: "Test 2",
};

const Presentation = () => {
  const selectedItemId = useRecoilValue(progressBar);
  const title = useRecoilValue(pageTitle);

  document.body.style = "background: #e0e2db;";

  return (
    <div className="presentation">
      <ProgressBar />
      <div className="step-title">{title}</div>
      <div className="step-content">{steps[selectedItemId]}</div>
      <Navigation />
    </div>
  );
};

export default Presentation;
