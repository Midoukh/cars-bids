import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Home } from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import { CarPage } from "./pages/CarPage";

type paramsType = {
  params: {
    id: string;
  };
}
function App() {
  const [carId, setCarId] = useState<string>("");
  const getCarId = (obj: paramsType) => {
    setCarId(obj.params.id)
  }
  return (
    <Box p={0} m={0}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/car-info/:name/:id" element={<CarPage carId={carId} />} loader={(obj: paramsType) => getCarId(obj)}/>
      </Routes>
    </Box>
  );
}

export default App;
