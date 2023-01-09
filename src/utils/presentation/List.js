import { KEY_CODE } from "const/app";
import { useCallback, useState } from "react";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";

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

const BaseList = ({ data }) => {
  const [currentPoint, setCurrentPoint] = useState(0);

  const handleKeyDown = useCallback((e) => {
    switch (e.keyCode) {
      case KEY_CODE.KEY_UP:
        return currentPoint === 0
          ? setCurrentPoint(currentPoint)
          : setCurrentPoint(currentPoint - 1);
      case KEY_CODE.KEY_DOWN:
      case KEY_CODE.SPACE_BAR:
        return setCurrentPoint(currentPoint + 1);
      case KEY_CODE.ENTER_KEY:
        return setCurrentPoint(data.length);
      default:
        return;
    }
  }, [currentPoint, data.length]);

  useKeyDownEventListener(handleKeyDown);

  return (
    <>
      {(data || []).slice(0, currentPoint + 1).map((information, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: information }} />
      ))}
    </>
  );
};

export default List;
