import { KEY_CODE } from "const/app";
import { useCallback } from "react";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";
import useProgressBar from "utils/hooks/useProgressBar";

const Navigation = () => {
  const { goToNext, goToPrevious, goToStep } = useProgressBar();

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.keyCode) {
        // case KEY_CODE.KEY_RIGHT:
        //   return goToNext();
        // case KEY_CODE.KEY_LEFT:
        //   return goToPrevious();
        case KEY_CODE.NUMBER_ONE:
        case KEY_CODE.NUMBER_TWO:
        case KEY_CODE.NUMBER_THREE:
        case KEY_CODE.NUMBER_FOUR:
        case KEY_CODE.NUMBER_FIVE:
        case KEY_CODE.NUMBER_SIX:
        case KEY_CODE.NUMBER_SEVEN:
        case KEY_CODE.NUMBER_EIGHT:
        case KEY_CODE.NUMBER_NINE:
          return goToStep(e.keyCode - 48);
        default:
          return;
      }
    },
    [goToStep]
  );

  useKeyDownEventListener(handleKeyDown);

  return (
    <div className="navigation align-bottom">
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext} className="next">
        Next
      </button>
    </div>
  );
};

export default Navigation;
