import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button, TextField, Rating } from "@mui/material";
import {
  ProductDetailContext,
  ProductDetailProvider,
} from "../../../components/Context/ProductDetailContext";
import axios from "axios";

const ProductDetail = () => {
  const productDetailContext = useContext(ProductDetailContext);
  console.log("productDetailContext", productDetailContext);
  const product = productDetailContext.product;

  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        paddingTop: "5%",

        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={product.image}
            sx={{
              display: "flex",
              width: "35%",
              height: "25rem",
              marginRight: "50px",
            }}
          ></Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "bold",
                  font: "b",
                }}
              >
                {product.productName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "3%",
              }}
            >
              <Rating
                sx={{}}
                name="simple-controlled"
                value={5}
                readOnly
              ></Rating>
              <Typography
                variant="h6"
                sx={{
                  marginLeft: "20px",
                }}
              >
                Đánh giá
              </Typography>
            </Box>
            <Box sx={{ marginTop: "3%" }}>
              <Typography variant="h6">Tình trạng: Còn hàng</Typography>
            </Box>
            <Box sx={{ marginTop: "5%" }}>
              <Typography variant="h6">Giá: {product.price}</Typography>
            </Box>
            <Box sx={{ marginTop: "5%" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Cam kết 100% Trầm Hương tự nhiên.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "5%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                Số lượng
              </Typography>
              <Button
                size="large"
                sx={{
                  marginLeft: "20px",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                -
              </Button>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                1
              </Typography>
              <Button
                size="large"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                +
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  maxWidth: "60%",
                  backgroundColor: "red",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "black",
                  }}
                >
                  MUA NGAY
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  marginLeft: "5px",
                  maxWidth: "60%",
                  backgroundColor: "#F0E68C	",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "black",
                  }}
                >
                  THÊM VÀO GIỎ HÀNG
                </Typography>
              </Button>
            </Box>
            <Typography
              sx={{
                display: "flex",
                color: "black",
                paddingTop: "20px",
              }}
            >
              Liên hệ để đặt hàng: 0965807973
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: "30px",
          flexDirection: "column",
          marginLeft: "26.5%",
          marginRight: "26.5%",
        }}
      >
        <Typography sx={{}}>THÔNG TIN SẢN PHẨM</Typography>
        <Typography
          sx={{
            marginTop: "20px",
            backgroundColor: "#f0f0f0",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Chất liệu:
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Nguồn gốc:
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Tuổi trầm:
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#f0f0f0",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Sử dụng:
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetail;
