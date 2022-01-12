import React from "react";
import Carousel from "react-material-ui-carousel";
import teamptu from "./teamptu.png";
import teamptu2 from "./teamptu2.png";
import teamptu3 from "./teamptu3.png";
import teamptu4 from "./teamptu4.png";
import teamptu5 from "./teamptu5.png";

function Carrusel() {

  const items = [
      {
        src:teamptu,
        alt:"TeamPTU"
      },
      {
        src:teamptu2,
        alt:"TeamPTU"
      },
      {
        src:teamptu3,
        alt:"TeamPTU"
      },
      {
        src:teamptu4,
        alt:"TeamPTU"
      },
      {
        src:teamptu5,
        alt:"TeamPTU"
      }
  ]

  function Item({item}) {
    return (
      
        <img src={item.src} alt={item.alt} width="100%" min-height="100%" />
      
    );
  }

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Carrusel;
