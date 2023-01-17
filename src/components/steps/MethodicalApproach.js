import { STEPS } from "const/app";
import Image from "utils/presentation/Image";
import List from "utils/presentation/List";
import GitLabBoard from "images/GitLabBoard.png";

const data = [
  <span>
    <span>Analyse</span>
    <br />
    <span>Try & Error</span>
  </span>,
  <span>
    <span>GitLab board</span>
    <br />
    <Image src={GitLabBoard} alt="GitLab Board" innerStyle="gitlab" />
  </span>,
  <span>
    <span>Regelmässige Kommunikation</span>
  </span>,
];

const MethodicalApproach = () => {
  return (
    <div>
      <List data={data} listId={STEPS.METHODICAL_APPROACH} singleElement />
    </div>
  );
};

export default MethodicalApproach;
