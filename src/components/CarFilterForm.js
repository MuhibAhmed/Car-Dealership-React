import React, { useState } from "react";
import { Controls, ActionControls, Control } from "./UI/UIControls";

const CarFilterForm = (props) => {
  const [filterObject, setFilterObject] = useState({
    color: "",
    sunroof: false,
    fourWheel: false,
    lowMiles: false,
    powerWindows: false,
    navigation: false,
    heatedSeats: false,
  });

  const colorChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, color: e.target.value };
    });
  };
  const sunroofChangeHandler = (e) => {
    setFilterObject((prev) => {
      console.log(e.target.checked);
      return { ...prev, sunroof: e.target.checked };
    });
  };
  const fourWheelChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, fourWheel: e.target.checked };
    });
  };
  const lowMilesChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, lowMiles: e.target.checked };
    });
  };
  const powerWindowsChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, powerWindows: e.target.checked };
    });
  };
  const navigationChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, navigation: e.target.checked };
    });
  };
  const heatedSeatsChangeHandler = (e) => {
    setFilterObject((prev) => {
      return { ...prev, heatedSeats: e.target.checked };
    });
  };

  const clearInputs = () => {
    setFilterObject({
      color: "",
      sunroof: false,
      fourWheel: false,
      lowMiles: false,
      powerWindows: false,
      navigation: false,
      heatedSeats: false,
    });
  };

  const resetHandler = () => {
    clearInputs();
    props.onReset();
  };

  const filterFormSubmitHandler = (e) => {
    e.preventDefault();
    props.onFilter(filterObject);
    clearInputs();
  };

  return (
    <form onSubmit={filterFormSubmitHandler}>
      <Controls>
        <Control>
          <label>Color</label>
          <input
            type="text"
            value={filterObject.color}
            onChange={colorChangeHandler}
          />
        </Control>
        <Control>
          <span>Sun Roof</span>
          <input
            type="checkbox"
            checked={filterObject.sunroof}
            onChange={sunroofChangeHandler}
          />
        </Control>
        <Control>
          <span>Four Wheel</span>
          <input
            type="checkbox"
            checked={filterObject.fourWheel}
            onChange={fourWheelChangeHandler}
          />
        </Control>
        <Control>
          <span>Low Miles</span>
          <input
            type="checkbox"
            checked={filterObject.lowMiles}
            onChange={lowMilesChangeHandler}
          />
        </Control>
        <Control>
          <span>Power Windows</span>
          <input
            type="checkbox"
            checked={filterObject.powerWindows}
            onChange={powerWindowsChangeHandler}
          />
        </Control>
        <Control>
          <span>Navigation System</span>
          <input
            type="checkbox"
            checked={filterObject.navigation}
            onChange={navigationChangeHandler}
          />
        </Control>
        <Control>
          <span>Heated Seats</span>
          <input
            type="checkbox"
            checked={filterObject.heatedSeats}
            onChange={heatedSeatsChangeHandler}
          />
        </Control>
      </Controls>
      <ActionControls>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit">Filter</button>
      </ActionControls>
    </form>
  );
};

export default CarFilterForm;
