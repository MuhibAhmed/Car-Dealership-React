// import "./Cars.css";

import { CarsStyled } from "./UI/UIControls";
import CarList from "./CarList";

const Cars = (props) => {
  return (
    <CarsStyled>
      <CarList items={props.carsData} />
    </CarsStyled>
  );
};

export default Cars;
