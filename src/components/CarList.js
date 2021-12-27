// import "./CarList.css";
import { CarListStyled } from "./UI/UIControls";
import CarItem from "./CarItem";
const CarList = (props) => {
  if (props.items.length === 0)
    return <h2 className="car-list__fallback">No Records Found.</h2>;
  return (
    <CarListStyled>
      {props.items.map((car) => (
        <CarItem key={car._id} data={car} />
      ))}
    </CarListStyled>
  );
};

export default CarList;
