import React, { useState } from "react";
import CarCharacteristics from "./CarCharacteristics";
import {
  CarItemAccordion,
  CarItemDescription,
  CarItemPrice,
  CarItemPanel,
} from "./UI/UIControls";

const CarItem = (props) => {
  const { make, price } = props.data;

  const [isPanelDisplayed, setIsPanelDisplayed] = useState(false);

  const accordionExpandHandler = (e) => {
    // e.target.classList.toggle("active");
    // const panel = e.target.nextElementSibling;
    console.log(props.data.color);
    setIsPanelDisplayed((prev) => !prev);
  };

  return (
    <div>
      <CarItemAccordion
        isActive={isPanelDisplayed}
        onClick={accordionExpandHandler}
      >
        <CarItemDescription>
          <h2>{make}</h2>
          <CarItemPrice> $ {price} </CarItemPrice>
        </CarItemDescription>
      </CarItemAccordion>
      <CarItemPanel isPanelDisplayed={isPanelDisplayed}>
        <CarCharacteristics data={props.data} />
      </CarItemPanel>
    </div>
  );
};

export default CarItem;
