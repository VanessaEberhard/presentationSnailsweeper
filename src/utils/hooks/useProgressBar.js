import { STEP_PROGRESS_BAR } from "const/app";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageTitle, progressBar } from "states/app";

const useProgressBar = () => {
  const [selectedItemId, setSelectedItemId] = useRecoilState(progressBar);
  const setPageTitle = useSetRecoilState(pageTitle);
  const navigate = useNavigate();
  const data = STEP_PROGRESS_BAR;

  const goToNext = useCallback(() => {
    let newSelectedItemId;
    if (selectedItemId >= data.length) {
      navigate("/questions");
    } else {
      newSelectedItemId = selectedItemId + 1;
      setSelectedItemId(newSelectedItemId);
    }
  }, [data.length, navigate, selectedItemId, setSelectedItemId]);

  const goToPrevious = useCallback(() => {
    let newSelectedItemId;
    if (selectedItemId <= 1) {
      navigate("/");
    } else {
      newSelectedItemId = selectedItemId - 1;
      setSelectedItemId(newSelectedItemId);
    }
  }, [navigate, selectedItemId, setSelectedItemId]);

  const goToStep = useCallback((stepNumber) => {
    if(stepNumber >= 1 && stepNumber <= data.length) {
      setSelectedItemId(stepNumber);
    }
  }, [data.length, setSelectedItemId]);

  useEffect(() => {
    selectedItemId && data && setPageTitle(data[selectedItemId - 1]?.label);
  }, [selectedItemId, data, setPageTitle]);

  return { goToNext, goToPrevious, goToStep };
};

export default useProgressBar;
