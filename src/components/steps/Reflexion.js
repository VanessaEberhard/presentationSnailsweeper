import { STEPS } from "const/app";
import List from "utils/presentation/List";
import Playfield from "images/Playfield.jpg";
import Image from "utils/presentation/Image";

const data = [
  <span>
    <span>Herausforderungen:</span>
    <div className="challenges">
      <div>Nachbarszellen aufdecken</div>
      <div>Anzahl Bomben berechnen</div>
    </div>
    <div className="playfield">
      <Image src={Playfield} alt="Playfield" />
    </div>
  </span>,
  <span>
    <span>Reflexion:</span>
    <div className="challenges">
      <div className="green">
        <div>Gegenseitige Unterstützung</div>
        <div>Fehleranalyse und Behebung</div>
      </div>
      <br />
      <div className="red">
        <div>Projektplanung verbessern</div>
      </div>
    </div>
  </span>,
];

const Reflexion = () => {
  return (
    <div>
      <List data={data} listId={STEPS.REFLEXION} singleElement />
    </div>
  );
};

export default Reflexion;
