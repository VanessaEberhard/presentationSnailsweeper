import { STEPS } from "const/app";
import Image from "utils/presentation/Image";
import List from "utils/presentation/List";
import PairProgramming from "images/PairProgramming.jpg";

const data = [
    "Animation",
    "Verwendung von Bildern",
    <Image alt="Pair programming" src={PairProgramming} innerStyle="pairProgramming" />
  ];

const Prospect = () => {
    return(
        <div>
            <List data={data} listId={STEPS.PROSPECT} />
        </div>
    )
}

export default Prospect;