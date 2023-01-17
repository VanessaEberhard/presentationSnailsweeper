import { STEPS } from "const/app";
import List from "utils/presentation/List";
import Snail from "images/Snail.png";
import Image from "utils/presentation/Image";

const data = ["Snailsweeper"];

const Introduction = () => {
  return (
    <div className="introduction">
      <List data={data} listId={STEPS.INTRODUCTION} />
      <div className="snail">
        <Image src={Snail} alt="Snail" />
      </div>
    </div>
  );
};

export default Introduction;
