import React from "react";
import SectionProduct from "./components/SectionProduct/SectionProduct";
import RelogioCronografo from "./img/relogio-cronografo.jpg";
import RelogioChampion from "./img/relogio-champion.jpg";
import RelogioCondor from "./img/relogio-condor.jpg";
import RelogioCasio from "./img/relogio-casio.jpg";
import CamisetaSaoPaulo1 from "./img/camiseta-saopaulo1.jpg";
import CamisetaSaoPaulo2 from "./img/camiseta-saopaulo2.jpg";
import CamisetaSaoPaulo3 from "./img/camiseta-saopaulo3.jpg";
import CamisetaVasco from "./img/camiseta-vasco.jpg";
import "./App.css";


var products = [
  {
    name: "Relógio Cronógrafo Technomarine WT30277G",
    price: 1745.20,
    image: {
      src: RelogioCronografo,
      alt: "Relógio Cronógrafo Technomarine WT30277G"
    },
    bestSeller: true
  },
  {
    name: "Relógio Champion Analógico CA20465Q",
    price: 139.90,
    image: {
      src: RelogioChampion,
      alt: "Relógio Champion Analógico CA20465Q"
    },
    bestSeller: true
  },
  {
    name: "Relógio Condor Analógico",
    price: 169.90,
    image: {
      src: RelogioCondor,
      alt: "Relógio Condor Analógico"
    },
    bestSeller: true
  },
  {
    name: "Relógio Casio G-Shock Ga-110Gb-1Adr",
    price: 799.00,
    image: {
      src: RelogioCasio,
      alt: "Relógio Casio G-Shock Ga-110Gb-1Adr"
    },
    bestSeller: true
  },
  {
    name: "Camisa São Paulo I 17/18 s/nº Torcedor Under",
    price: 99.90,
    image: {
      src: CamisetaSaoPaulo1,
      alt: "Camisa São Paulo I 17/18 s/nº Torcedor Unde"
    },
    news: true
  },
  {
    name: "Camisa São Paulo III 17/18 s/nº Torcedor Under",
    price: 99.90,
    image: {
      src: CamisetaSaoPaulo3,
      alt: "Camisa São Paulo III 17/18 s/nº Torcedor Unde"
    },
    news: true
  },
  {
    name: "Camisa São Paulo II 17/18 s/nº Torcedor Under",
    price: 99.90,
    image: {
      src: CamisetaSaoPaulo2,
      alt: "Camisa São Paulo II 17/18 s/nº Torcedor Unde"
    },
    news: true
  },
  {
    name: "Camisa Vasco Templária Ed. Limitada Masculina",
    price: 44.90,
    image: {
      src: CamisetaVasco,
      alt: "Camisa Vasco Templária Ed. Limitada Masculina"
    },
    news: true
  }
];

function bestSeller() {
  var filtered = [];

  for(var indice = 0; indice < products.length; indice++) {
    if(products[indice].bestSeller) {
      filtered.push(products[indice]);
    }
  }

  return filtered;
}

function news() {
  var filtered = [];

  for(var indice = 0; indice < products.length; indice++) {
    if(products[indice].news) {
      filtered.push(products[indice]);
    }
  }

  return filtered;
}

export default () => (
      <div className="app">
        <SectionProduct title="Mais vendidos" products={bestSeller()}/>
        <SectionProduct title="Novidades" products={news()}/>
      </div>
);