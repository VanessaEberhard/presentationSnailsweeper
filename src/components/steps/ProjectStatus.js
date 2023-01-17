import { KEY_CODE } from "const/app";
import { useCallback } from "react";
import useKeyDownEventListener from "utils/hooks/useKeyDownEventListener";
import useProgressBar from "utils/hooks/useProgressBar";
import Video from "utils/presentation/Video";
import SnailSweeper from "videos/SnailSweeper.mp4";

const ProjectStatus = () => {
    const { goToNext, goToPrevious } = useProgressBar();

    const handleKeyDown = useCallback(
      (e) => {
        switch (e.keyCode) {
          case KEY_CODE.KEY_LEFT:
            return goToPrevious();
          case KEY_CODE.KEY_RIGHT:
            return goToNext();
          default:
            return;
        }
      },
      [goToNext, goToPrevious]
    );
  
    useKeyDownEventListener(handleKeyDown);

    return(
        <div>
            <Video src={SnailSweeper} />
        </div>
    )
}

export default ProjectStatus;