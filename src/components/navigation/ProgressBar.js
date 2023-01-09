import { STEP_PROGRESS_BAR } from "const/app";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { progressBar } from "state/app";
import "styles/ProgressBar.scss";

const ProgressBar = () => {
  const [selectedItemId, setSelectedItemId] = useRecoilState(progressBar);

  const handleCircleClick = (item) => {
    setSelectedItemId(item.id);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-11 col-sm-9 col-md-7 
                col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2"
          >
            <div className="px-0 pt-4 pb-0 mt-3 mb-3">
              <form id="form">
                <ol id="progressbar">
                  {_.sortBy(STEP_PROGRESS_BAR, ['id']).map((step) => (
                    <li
                      className={step.id <= selectedItemId ? "active" : ""}
                      key={step.id}
                      data-content={step.id}
                      onClick={() => handleCircleClick(step)}
                    >
                      <strong>{step.label}</strong>
                    </li>
                  ))}
                </ol>
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
