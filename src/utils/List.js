import { KEY_CODE } from "const/app";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    };

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPoint, data.length]);

  return (
    <>
      {(data || []).slice(0, currentPoint + 1).map((information, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: information }} />
      ))}
    </>
  );
};

export default List;
