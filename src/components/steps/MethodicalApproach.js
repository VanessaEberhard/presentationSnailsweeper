import { STEPS } from "const/app";
import Image from "utils/presentation/Image";
import List from "utils/presentation/List";
import GitLabBoard from "images/GitLabBoard.png";

const data = [
  "Analyse",
  <span>
    <span>GitLab board</span>
    <br />
    <Image src={GitLabBoard} alt="GitLab Board" innerStyle="gitlab" />
  </span>,
  <span>
    <span>Regelmässige Kommunikation</span>
    <br />
    <span>Thinking Point</span>
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