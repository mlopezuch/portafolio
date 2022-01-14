import React from "react";
import ImageGallery from "react-image-gallery";
import teamptu from "./img/teamptu.png";
import teamptu2 from "./img/teamptu2.png";
import teamptu3 from "./img/teamptu3.png";
import teamptu4 from "./img/teamptu4.png";
import teamptu5 from "./img/teamptu5.png";
import teamptu6 from "./img/teamptu6.png";

const images = [
  {
    original: teamptu,
    thumbnail: teamptu,
  },
  {
    original: teamptu2,
    thumbnail: teamptu2,
  },
  {
    original: teamptu3,
    thumbnail: teamptu3,
  },
  {
    original: teamptu4,
    thumbnail: teamptu4,
  },
  {
    original: teamptu5,
    thumbnail: teamptu5,
  },
  {
    original: teamptu6,
    thumbnail: teamptu6,
  }
];

function Carrusel2() {
  return <ImageGallery items={images} />;
}

export default Carrusel2;
