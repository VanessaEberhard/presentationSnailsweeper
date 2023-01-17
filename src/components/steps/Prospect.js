import { STEPS } from "const/app";
import List from "utils/presentation/List";

const data = [
    "Animation",
    "Verwendung von Bildern",
  ];

const Prospect = () => {
    return(
        <div>
            <List data={data} listId={STEPS.PROSPECT} />
        </div>
    )
}

export default Prospect;