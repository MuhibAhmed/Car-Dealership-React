import React, { useState } from "react";
import Cars from "./components/Cars";
import CarFilter from "./components/CarFilter";

const carDummyData = [
  {
    _id: "59d2698c2eaefb1268b69ee5",
    make: "Chevy",
    year: 2016,
    color: "red",
    price: 16106,
    hasSunroof: false,
    isFourWheelDrive: true,
    hasLowMiles: true,
    hasPowerWindows: false,
    hasNavigation: true,
    hasHeatedSeats: false,
  },
  {
    _id: "59d2698c05889e0b23959106",
    make: "Toyota",
    year: 2012,
    color: "Silver",
    price: 18696,
    hasSunroof: true,
    isFourWheelDrive: true,
    hasLowMiles: false,
    hasPowerWindows: true,
    hasNavigation: false,
    hasHeatedSeats: true,
  },
  {
    _id: "59d2698c6f1dc2cbec89c413",
    make: "Mercedes",
    year: 2016,
    color: "Black",
    price: 18390,
    hasSunroof: true,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: true,
    hasNavigation: true,
    hasHeatedSeats: false,
  },
  {
    _id: "59d2698c340f2728382c0a73",
    make: "Toyota",
    year: 2015,
    color: "White",
    price: 15895,
    hasSunroof: true,
    isFourWheelDrive: false,
    hasLowMiles: true,
    hasPowerWindows: true,
    hasNavigation: false,
    hasHeatedSeats: true,
  },
  {
    _id: "59d2698cba9b82c2347cd13a",
    make: "Ford",
    year: 2014,
    color: "Gray",
    price: 19710,
    hasSunroof: false,
    isFourWheelDrive: true,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: true,
    hasHeatedSeats: true,
  },
  {
    _id: "59d2698ce2e7eeeb4f109001",
    make: "Toyota",
    year: 2014,
    color: "Red",
    price: 19248,
    hasSunroof: true,
    isFourWheelDrive: false,
    hasLowMiles: true,
    hasPowerWindows: true,
    hasNavigation: true,
    hasHeatedSeats: true,
  },
  {
    _id: "59d2698cd6a3b8f0dd994c9d",
    make: "Toyota",
    year: 2015,
    color: "Black",
    price: 13170,
    hasSunroof: true,
    isFourWheelDrive: false,
    hasLowMiles: true,
    hasPowerWindows: true,
    hasNavigation: false,
    hasHeatedSeats: false,
  },
  {
    _id: "59d2698c86ab54cee8acdc7b",
    make: "Mercedes",
    year: 2013,
    color: "Gray",
    price: 15669,
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: true,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false,
  },
  {
    _id: "59d2698cda9e8d39476c678a",
    make: "Toyota",
    year: 2015,
    color: "White",
    price: 16629,
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: true,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: true,
  },
];
function App() {
  let [carData, setCarData] = useState(carDummyData);

  let filterCarTemp = [];
  const filterCarData = (carObject) => {
    filterCarTemp = carDummyData.filter((car) =>
      carObject.color ? car.color === carObject.color : true
    );
    filterCarTemp = filterCarTemp.filter(
      (car) => car.hasSunroof === carObject.sunroof
    );

    filterCarTemp = filterCarTemp.filter(
      (car) => car.isFourWheelDrive === carObject.fourWheel
    );
    filterCarTemp = filterCarTemp.filter(
      (car) => car.hasLowMiles === carObject.lowMiles
    );

    filterCarTemp = filterCarTemp.filter(
      (car) => car.hasPowerWindows === carObject.powerWindows
    );

    filterCarTemp = filterCarTemp.filter(
      (car) => car.hasNavigation === carObject.navigation
    );

    filterCarTemp = filterCarTemp.filter(
      (car) => car.hasHeatedSeats === carObject.heatedSeats
    );

    setCarData(filterCarTemp);
  };

  const resetCarData = () => {
    setCarData(carDummyData);
  };

  return (
    <div>
      <CarFilter onReset={resetCarData} onFilter={filterCarData} />
      <Cars carsData={carData} />
    </div>
  );
}

export default App;
