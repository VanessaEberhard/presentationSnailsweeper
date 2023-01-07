import { KEY_CODE, STEP_PROGRESS_BAR } from "const/app";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { progressBar } from "state/app";
import useProgressBar from "utils/useProgressBar";

const Navigation = () => {
  const navigate = useNavigate();
  const selectedItemId = useRecoilValue(progressBar);
  const { goToNext, goToPrevious } = useProgressBar();

  const checkPrevious = useCallback(() => {
    if (selectedItemId === 1) {
      navigate("/");
    } else {
      goToPrevious();
    }
  }, [goToPrevious, navigate, selectedItemId]);

  const checkNext = useCallback(() => {
    if (selectedItemId !== STEP_PROGRESS_BAR.length) {
      goToNext();
    }
  }, [goToNext, selectedItemId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
        if(e.keyCode === KEY_CODE.KEY_RIGHT){
            checkNext()
        } else if(e.keyCode === KEY_CODE.KEY_LEFT) {
            checkPrevious();
        }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [checkNext, checkPrevious]);

  return (
    <div className="navigation align-bottom">
      <button onClick={() => checkPrevious()}>Previous</button>
      <button onClick={() => checkNext()} className="next">Next</button>
    </div>
  );
};

export default Navigation;
