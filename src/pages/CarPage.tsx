import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

import data from "../Data/cars.json";

console.log(data);
type CarPageType = {
    carId: string;
};

export const CarPage: React.FC<CarPageType> = ({carId}) => {
  return (
    <main style={{ backgroundColor: "red" }}>
      <Link to="/">
        <h1>car info</h1>
      </Link>
    </main>
  );
};
