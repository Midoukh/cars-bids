import React, { useState } from "react";
import { NavBar } from "../compononents/NavBar";
import { HomeImage } from "../compononents/HomeImage";
import { SearchCarsInput } from "../compononents/SearchCars";
import { Box } from "@chakra-ui/react";
import { CarsList } from "../Containers/CarsList";

export const Home = () => {
  return (
    <Box maxWidth="100vw" p={0} m={0} >
      <NavBar />
      <HomeImage />
      <SearchCarsInput />
      <CarsList />
    </Box>
  );
};
