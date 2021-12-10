import React from "react";
import Carousel from "react-material-ui-carousel";

function Carrusel(props) {
  var items = [
    {
      imagen: "/trailer1.jpg",
    },
    {
      imagen: "/Trailer2.jpg",
    },
    {
      imagen: "/Trailer3.jpg",
    },
    {
      imagen: "/trailer4.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div style={{ mixBlendMode: "hue" }}>
      <img
        src={process.env.PUBLIC_URL + props.item.imagen}
        style={{ height: "500px", width: "100%" }}
        alt=""
      />
    </div>
  );
}

export default Carrusel;
