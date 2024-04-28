import React from "react";

import { Box, Typography, Button } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Review from "./Review";

const ReviewMain = () => {
  return (
    <Box>
      <Header />
      <Review />
      <Footer />
    </Box>
  );
};

export default ReviewMain;
