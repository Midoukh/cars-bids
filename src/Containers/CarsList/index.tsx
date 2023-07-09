import React, { useState } from "react";

import { CarType } from "../../Types";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { CarCard } from "../../compononents/CarCard";
import data from "../../Data/cars.json";
import { generateUniqueId } from "../../utils/generateUniqueId";

const dubData: CarType[] | any = [];

for (let i = 0; i < 4; i++) {
  dubData.push(data[0]);
}

type CarsListProps = {
  //cars: Array<CarType>;
};

export const CarsList: React.FC<CarsListProps> = ({}) => {
  const [cars, setCars] = useState(dubData);

  return (
    <Grid
      templateColumns={"repeat(4,1fr)"}
      gap={250}
      gridAutoFlow={"column"}
      bg="whiteAlpha.900"
      overflowX={"scroll"}
      overflowY={"hidden"}
      paddingInline={10}
      marginInline={0}
      paddingBottom={5}
    >
      {cars.map((car: CarType | any) => (
        <CarCard
          id={car.id}
          key={generateUniqueId()}
          name={`${car.Annee} ${car.Name}`}
          imgSrc={car.EXTERIEURE[0]}
          year={car.Annee}
          latestBid={car.lenchere[0].valeur}
          currency="DA"
          timeLeft={5000}
          numberOfBids={car.lenchere.length}
          address={car.adresse}
          fuel={car.carburant}
          city={car.city}
          
        />
      ))}
    </Grid>
  );
};

