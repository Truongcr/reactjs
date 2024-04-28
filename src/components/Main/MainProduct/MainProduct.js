import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { ProductContext } from "../../Context/ProductContext";
import ProductSlider from "../../../features/Product/ProductSlider";
import ProductContent from "../../../features/Product/ProductContent";
import { json } from "react-router-dom";

const MainProduct = () => {
  const context = useContext(CategoryContext);
  const categorys = context.category;
  const productContext = useContext(ProductContext);
  const productss = productContext.products;
  const categoryTypeId = productContext.categoryTypeId;
  const products = [];
  productss.forEach((element, index) => {
    if (index < 8) {
      products.push(element);
    }
  });
  products.filter((p) => p);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortList = [
    "Thứ tự theo mức độ phổ biến",
    "Thứ tự theo điểm đánh giá",
    "Mới nhất",
    "Theo giá giảm dần",
    "Theo thứ tự giá tăng dần",
  ];
  const sortSelect = sortList[0];

  const [selectedValue, setSelectedValue] = useState([]);

  const handleMenuItemClick = (from, to) => {
    setSelectedValue([from, to]);
    handleClose();
  };

  const [searchValue, setSearchValue] = useState();

  const handleSearch = () => {};
  // Lấy dữ liệu từ Local Storage sau khi trang tải lại
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        component="img"
        src="/images/imageBackgroud.jpg"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          justifyItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <Box
            key={item.productId}
            sx={{
              maxWidth: "10.5%",
              paddingLeft: "20px",
            }}
          >
            <Box
              component="img"
              src={item.image}
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                margin: "30px 20px",
              }}
            ></Box>
            <Typography sx={{ textAlign: "center", color: "black" }}>
              {item.productName}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F0F8FF",
          marginTop: "25px",
          maxWidth: "90%",
          marginRight: "10%",
          marginLeft: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            SẮP XẾP
          </Typography>
          <Box sx={{ paddingLeft: "20px", justifyContent: "flex-start" }}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                backgroundColor: "rgb(248 248 248 / 10%)",
              }}
            >
              {sortSelect}
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {sortList.map((item) => (
                <MenuItem key={item.productId} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingTop: "25px",
            margin: "0 10% 0 5%",
          }}
        >
          <TextField
            sx={{ width: "400px" }}
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            // value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            sx={{ height: "40px", width: "180px" }}
            variant="contained"
            color="primary"
            onClick={() => productContext.handleClickSearch(searchValue)}
          >
            Tìm kiếm sản phẩm
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // paddingLeft: "40%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              // width: "auto",
            }}
          >
            <Typography
              sx={{
                color: "black",
                display: "flex",
              }}
            >
              BỘ LỌC
            </Typography>
          </Box>
          <Box
            sx={{
              color: "black",
              marginLeft: "2%",
              display: "flex",
              width: "300px",
            }}
          >
            <FormControl
              sx={{
                // m: 1,
                // width: "100%",
                height: "30%",
                display: "flex",
              }}
            >
              <InputLabel sx={{ color: "black" }}>Giá</InputLabel>
              <Select
                sx={{
                  width: "150px",
                  color: "black",
                  borderRadius: "30px",
                  // backgroundColor: "rgb(248 248 248 / 10%)",
                  display: "flex",
                  height: "20%",
                }}
                label="Age"
                // value={111}
                // onChange={() =>
                //   productContext.handleClickSearchPrice(selectedValue)
                // }
                // onClick={() => handleMenuItemClick(0, 100)}
              >
                <MenuItem
                  onClick={() => productContext.handleClickSearchPrice(0, 100)}
                  value={1}
                >
                  Dưới 100k
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    productContext.handleClickSearchPrice(100, 200)
                  }
                  value={2}
                >
                  100k - 200k
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    productContext.handleClickSearchPrice(200, 300)
                  }
                  value={3}
                >
                  200k - 300k
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    productContext.handleClickSearchPrice(300, 400)
                  }
                  value={4}
                >
                  300k - 400k
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    productContext.handleClickSearchPrice(400, 10000000)
                  }
                  value={5}
                >
                  Trên 400k
                </MenuItem>
              </Select>
            </FormControl>
            {/* <FormControl
              sx={{
                m: 1,
                minWidth: "30%",
                display: "flex",
              }}
            >
              <InputLabel sx={{ color: "black" }}>Giá</InputLabel>
              <Select
                sx={{
                  color: "black",
                  borderRadius: "30px",
                  backgroundColor: "rgb(248 248 248 / 10%)",
                }}
                value={selectedValue}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",

          // backgroundColor: "#101628",
        }}
      >
        <ProductContent products={productss} />
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default MainProduct;
