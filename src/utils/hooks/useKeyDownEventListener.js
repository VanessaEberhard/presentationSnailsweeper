import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageTitle } from "states/app";

const useKeyDownEventListener = (handleKeyDown, title) => {
  const setPageTitle = useSetRecoilState(pageTitle);

  useEffect(() => {
    title && setPageTitle(title);
    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, setPageTitle, title]);
};

export default useKeyDownEventListener;
