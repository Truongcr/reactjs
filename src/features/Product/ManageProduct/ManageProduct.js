import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Footer from "../../../components/Footer/Footer";
import ProductContent from "../ProductContent";
// import Footer from "../../../components/Footer/Footer";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  // const [isClickedProduct, setIsClickedProduct] = useState(false);

  useEffect(() => {
    console.log("load category");
    // Gọi API hoặc thực hiện các tác vụ sau khi render
    fetch("http://localhost:8086/api/product/get-all")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  const handleClickTimKiem = (event) => {};

  return (
    <Box sx={{ background: "white" }}>
      <Header></Header>
      <Box
        sx={{
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "2%",
        }}
      >
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            TRANG QUẢN LÝ SẢN PHẨM
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "#F4F6F6",
              paddingBottom: "20px",
            }}
          >
            <Typography>Tìm kiếm sản phẩm</Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Box sx={{ background: "#F4F6F6", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "40px 0 40px ",
                  justifyContent: "center",
                  borderRadius: "4px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography>Tên sản phẩm</Typography>
                  <TextField
                    sx={{ marginLeft: "30px", width: "200px" }}
                    label="Nhập tên sản phẩm"
                    variant="outlined"

                    // onChange={handleChangeProductTitle}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "30px",
                  }}
                >
                  <Typography>Loại sản phẩm</Typography>
                  <TextField
                    sx={{ marginLeft: "30px", width: "250px" }}
                    label="Nhập mô tả sản phẩm"
                    variant="outlined"

                    // onChange={handleChangeProductTitle}
                  ></TextField>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: "30px",
                  justifyContent: "center",
                }}
              >
                <Typography>Giá sản phẩm</Typography>
                <TextField
                  sx={{ marginLeft: "30px", width: "250px" }}
                  label="Nhập mô tả sản phẩm"
                  variant="outlined"

                  // onChange={handleChangeProductTitle}
                ></TextField>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                  justifyContent: "center",
                }}
              >
                <Button onClick={handleClickTimKiem}>Tìm kiếm</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "2%" }}>
          <Box sx={{ background: "#F4F6F6" }}>
            <Typography>Danh sách sản phẩm</Typography>
          </Box>
          <Box>
            <Typography>Tất cả</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ProductContent products={products} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ManageProduct;
