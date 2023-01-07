import { KEY_CODE } from "const/app";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { pageTitle } from "state/app";

const Title = () => {
  const navigate = useNavigate();
  const setPageTitle = useSetRecoilState(pageTitle);

  const navigateToPresentation = useCallback(
    () => navigate("/presentation"),
    [navigate]
  );

  document.body.style = "background: #191716;";

  useEffect(() => {
    setPageTitle("Snailsweeper")
    const handleKeyDown = (e) => {
      switch(e.keyCode) {
        case KEY_CODE.SPACE_BAR:
        case KEY_CODE.KEY_RIGHT:
        case KEY_CODE.ENTER_KEY:
            navigateToPresentation();
            return;
        default:
            return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigateToPresentation, setPageTitle]);

  return (
    <div className="title-content">
      <div className="title">Snailsweeper</div>
      <div className="subtitle">by Vanessa Eberhard & Dylan Meierhofer</div>
      <button onClick={navigateToPresentation}>Start</button>
    </div>
  );
};

export default Title;
