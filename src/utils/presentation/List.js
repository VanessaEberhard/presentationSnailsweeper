import { KEY_CODE } from "const/app";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { listStepState } from "states/app";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";
import useProgressBar from "utils/hooks/useProgressBar";

const List = ({ isOrderedList = false, ...props }) => {
  return (
    <div className="list">
      {isOrderedList ? (
        <ol>
          <BaseList {...props} />
        </ol>
      ) : (
        <ul>
          <BaseList {...props} />
        </ul>
      )}
    </div>
  );
};

const BaseList = ({ data, listId, singleElement }) => {
  //const [currentPoint, setCurrentPoint] = useState(0);
  const [currentPoint, setCurrentPoint] = useRecoilState(listStepState(listId));
  const { goToNext, goToPrevious } = useProgressBar();

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.keyCode) {
        case KEY_CODE.KEY_LEFT:
        case KEY_CODE.KEY_UP:
          return currentPoint === 0
            ? goToPrevious()
            : setCurrentPoint(currentPoint - 1);
        case KEY_CODE.KEY_RIGHT:
        case KEY_CODE.KEY_DOWN:
        case KEY_CODE.SPACE_BAR:
          return currentPoint + 1 === data.length
            ? goToNext()
            : setCurrentPoint(currentPoint + 1);
        case KEY_CODE.ENTER_KEY:
          return setCurrentPoint(data.length);
        default:
          return;
      }
    },
    [currentPoint, data.length, goToNext, goToPrevious, setCurrentPoint]
  );

  useKeyDownEventListener(handleKeyDown);

  return (
    <>
      {(data || []).slice(!!singleElement ? currentPoint : 0, currentPoint + 1).map((information, index) => (
        <li key={index}>{information}</li>
      ))}
    </>
  );
};

export default List;
