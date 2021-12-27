import { Car, CheckCircle } from "@styled-icons/boxicons-regular";
import { PanelUL } from "./UI/UIControls";
const CarCharacteristics = (props) => {
  const {
    color,
    make,
    year,
    price,
    hasSunroof,
    isFourWheelDrive,
    hasLowMiles,
    hasPowerWindows,
    hasNavigation,
    hasHeatedSeats,
  } = props.data;

  return (
    <PanelUL>
      <li>
        <label>Color:</label> <Car size="24" style={{ color }} />
      </li>
      <li>Year: {year}</li>
      {}
      <li>
        <label>Sunroof:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: hasSunroof ? "green" : "gray" }}
        />
      </li>
      <li>
        <label>Four Wheel Drive:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: isFourWheelDrive ? "green" : "gray" }}
        />
      </li>
      <li>
        <label>Low Miles:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: hasLowMiles ? "green" : "gray" }}
        />
      </li>
      <li>
        <label>Power Windows:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: hasPowerWindows ? "green" : "gray" }}
        />
      </li>
      <li>
        <label>Navigation:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: hasNavigation ? "green" : "gray" }}
        />
      </li>
      <li>
        <label>Heated Seats:</label>{" "}
        <CheckCircle
          size="24"
          style={{ color: hasHeatedSeats ? "green" : "gray" }}
        />
      </li>
    </PanelUL>
  );
};

export default CarCharacteristics;
