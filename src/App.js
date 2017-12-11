import React from "react";
import CardProduct from "./components/CardProduct/CardProduct";
import RelogioCaro from "./img/relogio-cronografo.jpg";
import CamisetaCredo from "./img/camiseta-sao-paulo.jpg"

var imageClock = {
  src: RelogioCaro,
  alt: "Relógio Cronógrafo Technomarine WT30277G"
};

var imageTshirt = {
  src: CamisetaCredo,
  alt: "Camisa São Paulo I 17/18 s/nº Torcedor Under"
};

export default () => (
      <div className="App">
        <CardProduct name="Relógio Cronógrafo Technomarine WT30277G" price={1745.20} image={imageClock}/>
        <CardProduct name="Camisa São Paulo I 17/18 s/nº Torcedor Under" price={99.90} image={imageTshirt}/>
      </div>
);