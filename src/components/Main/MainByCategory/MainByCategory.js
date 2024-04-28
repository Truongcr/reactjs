import { Box } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import MainProduct from "../MainProduct/MainProduct";
import Footer from "../../Footer/Footer";

const MainByCategory = () => {
  return (
    <Box
      sx={{
        // margin: "0 18% 0 18%"
        display: "block",
        justifyContent: "center",
      }}
    >
      <Header />

      <MainProduct />

      <Box sx={{ paddingTop: "30px" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainByCategory;
