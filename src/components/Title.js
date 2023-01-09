import { KEY_CODE } from "const/app";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";

const Title = () => {
  const navigate = useNavigate();

  const navigateToPresentation = useCallback(
    () => navigate("/presentation"),
    [navigate]
  );

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.keyCode) {
        case KEY_CODE.SPACE_BAR:
        case KEY_CODE.KEY_RIGHT:
        case KEY_CODE.ENTER_KEY:
          navigateToPresentation();
          return;
        default:
          return;
      }
    },
    [navigateToPresentation]
  );

  useKeyDownEventListener(handleKeyDown, "Snailsweeper");

  document.body.style = "background: #191716;";

  return (
    <div className="title-content">
      <div className="title">Snailsweeper</div>
      <div className="subtitle">by Vanessa Eberhard & Dylan Meierhofer</div>
      <button onClick={navigateToPresentation}>Start</button>
    </div>
  );
};

export default Title;
