import { KEY_CODE } from "const/app";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";
import QuestionMark from "images/QuestionMark.png";

const Questions = () => {
  const navigate = useNavigate();

  const handleKey = useCallback(
    (e) => {
      if (e.keyCode === KEY_CODE.KEY_LEFT) {
        navigate("/presentation");
      }
    },
    [navigate]
  );

  useKeyDownEventListener(handleKey, "Questions");

  document.body.style = "background: #191716;";

  return (
    <div className="questions">
      <img src={QuestionMark} alt="Question mark" className="image" />
      <div className="subtitle">Questions</div>
    </div>
  );
};

export default Questions;
