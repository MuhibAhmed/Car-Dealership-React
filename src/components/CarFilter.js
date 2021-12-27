import { CarFilterStyle } from "./UI/UIControls";
import CarFilterForm from "./CarFilterForm";

const CarFilter = (props) => {
  return (
    <CarFilterStyle>
      <CarFilterForm onReset={props.onReset} onFilter={props.onFilter} />
    </CarFilterStyle>
  );
};

export default CarFilter;
