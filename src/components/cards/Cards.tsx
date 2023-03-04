import "./cards.scss";
import archer from "../../assets/images/archer.png";
import babyDrug from "../../assets/images/babyDrug.png";
import barbarian from "../../assets/images/barbarian.png";
import bowler from "../../assets/images/bowler.png";
import drag from "../../assets/images/drag.png";
import electroDrag from "../../assets/images/electro-drag.png";
import giant from "../../assets/images/giant.png";
import goolem from "../../assets/images/goolem.png";
import hoog from "../../assets/images/hoog.png";
import iceGoolem from "../../assets/images/ice-goolem.png";
import iceWizard from "../../assets/images/ice-wizard.png";
import lava from "../../assets/images/lava.png";
import miner from "../../assets/images/miner.png";
import minion from "../../assets/images/minion.png";
import pekka from "../../assets/images/pekka.png";
import star from "../../assets/images/star.png";
import valkryne from "../../assets/images/valkryne.png";
import witch from "../../assets/images/witch.png";
import wizard from "../../assets/images/wizard.png";

const troops = [
   { id: 1, score: 5, title: "Archer", src: archer },
   { id: 2, score: 3, title: "BabyDrug", src: babyDrug },
   { id: 3, score: 6, title: "Barbarian", src: barbarian },
   { id: 4, score: 0, title: "Bowler", src: bowler },
   { id: 5, score: 1, title: "Drag", src: drag },
   { id: 6, score: 3, title: "ElectroDrag", src: electroDrag },
   { id: 7, score: 4, title: "Giant", src: giant },
   { id: 8, score: 1, title: "Goolem", src: goolem },
   { id: 9, score: 5, title: "Hoog", src: hoog },
   { id: 10, score: 1, title: "IceGoolem", src: iceGoolem },
   { id: 11, score: 2, title: "IceWizard", src: iceWizard },
   { id: 12, score: 0, title: "Lava", src: lava },
   { id: 13, score: 1, title: "Miner", src: miner },
   { id: 14, score: 3, title: "Minion", src: minion },
   { id: 15, score: 5, title: "Pekka", src: pekka },
   { id: 16, score: 2, title: "Valkryne", src: valkryne },
   { id: 17, score: 5, title: "Witch", src: witch },
   { id: 18, score: 4, title: "Wizard", src: wizard },
];

const Cards = () => {
   return (
      <div className="cards">
         {troops.map((troop) => (
            <div key={troop.id} className="card">
               <img src={troop.src} alt={troop.title} />
               <div className="stars">
                  {troop.score === 0 ? (
                     <span>Zero</span>
                  ) : (
                     new Array(troop.score).fill(1).map((item, index) => <img key={index} src={star} alt="star" />)
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};

export default Cards;
