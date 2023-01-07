import { STEP_PROGRESS_BAR } from "const/app";
import { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pageTitle, progressBar } from "state/app";

const useProgressBar = () => {
  const [selectedItemId, setSelectedItemId] = useRecoilState(progressBar);
  const setPageTitle = useSetRecoilState(pageTitle);
  const data = STEP_PROGRESS_BAR;

  const goToNext = useCallback(() => {
    let newSelectedItemId;
    if (selectedItemId > data.length) {
      newSelectedItemId = data.length;
    } else {
      newSelectedItemId = selectedItemId + 1;
    }
    setSelectedItemId(newSelectedItemId);
  }, [data.length, selectedItemId, setSelectedItemId]);

  const goToPrevious = useCallback(() => {
    let newSelectedItemId;
    if (selectedItemId < 1) {
      newSelectedItemId = 1;
    } else {
      newSelectedItemId = selectedItemId - 1;
    }
    setSelectedItemId(newSelectedItemId);
  }, [selectedItemId, setSelectedItemId]);

  useEffect(() => {
    selectedItemId && data && setPageTitle(data[selectedItemId - 1]?.label);
  }, [selectedItemId, data, setPageTitle]);

  return { goToNext, goToPrevious };
};

export default useProgressBar;
