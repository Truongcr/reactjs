import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Box, Typography, Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Box>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
