import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Home } from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import { CarPage } from "./pages/CarPage";
import { NavBar } from "./compononents/NavBar";

function App() {
 

  return (
    <Box p={0} m={0}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/car-info/:name/:id" element={<CarPage />} />
      </Routes>
    </Box>
  );
}

export default App;
