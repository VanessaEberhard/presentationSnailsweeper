import { useRecoilValue } from "recoil";
import { pageTitle, progressBar } from "state/app";
import useSteps from "utils/hooks/useSteps";
import Navigation from "./navigation/Navigation";
import ProgressBar from "./navigation/ProgressBar";

const Presentation = () => {
  const selectedItemId = useRecoilValue(progressBar);
  const title = useRecoilValue(pageTitle);
  const steps = useSteps();

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
