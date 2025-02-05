import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import CreatePage from "./component/CreatePage";
import Navbar from "./component/Navbar";


const App = () => {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
        </Routes>
      </Box>
    </>
  )
}

export default App;
