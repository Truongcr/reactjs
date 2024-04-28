import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Popover,
  Menu,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Link } from "react-router-dom";
import Login from "../../features/Login/Login";
import { ProductContext } from "../Context/ProductContext";
import { CategoryContext } from "../Context/CategoryContext";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [urlCategory, setUrlCategory] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const customButton = {
    fontFamily: "aria",
    fontSize: 11,
  };

  const categoryContext = useContext(CategoryContext);

  const [categorys, setCategoryType] = useState([]);
  useEffect(() => {
    setCategoryType(categoryContext.categorys);
  });

  const productContext = useContext(ProductContext);

  window.onload = function () {
    // Kiểm tra xem có danh mục đã chọn trong Local Storage không
    const categoryId = localStorage.getItem("categoryId");

    const categoryTypeId = localStorage.getItem("categoryTypeId");

    if (categoryId || categoryTypeId) {
      // Sử dụng danh mục đã chọn để thực hiện thao tác tương ứng
      // Ví dụ: Đặt danh mục đã chọn vào trạng thái ứng dụng
      productContext.handleClickCategory(categoryTypeId);
    }
  };

  const styleComponent = {
    colorText: "white",
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101628",
          height: "150px",
          position: "sticky",
          top: "0",
          zIndex: 1200,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontFamily: "sans-serif",
          }}
        >
          <Box
            sx={{ display: "flex", width: "50px", height: "auto" }}
            component="img"
            src="/images/logo.jpg"
          ></Box>
          <Button onClick={productContext.handleClickHome}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                style={{ fontFamily: "Montserrat" }}
                sx={{
                  display: "flex",
                  textTransform: "capitalize",
                  // marginLeft: "-45px",
                  color: "#fcb900",
                  // verticalAlign: "center",
                }}
              >
                TRẦM HƯƠNG RỪNG
              </Typography>
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            marginLeft: "50px",
            color: "#ffffff",
            // fontFamily: "serif",
          }}
        >
          {categorys.map((item) => (
            <Button
              key={item.categoryTypeId}
              value={item.categoryTypeId}
              onClick={() =>
                productContext.handleClickCategory(item.categoryTypeId)
              }
              style={{
                color:
                  productContext.categoryTypeId === item.categoryTypeId
                    ? "red"
                    : "blue",
              }}
            >
              <Link
                to={`/home-product/${item.categoryTypeUrl}`}
                style={{ textDecoration: "none" }}
              >
                <Typography color="#ffffff" style={customButton}>
                  {item.categoryTypeName}
                </Typography>
              </Link>
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "20px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", cursor: "pointer" }}>
              <QueryBuilderIcon
                sx={{
                  color: "#fcb900",
                  marginLeft: "20px",
                  display: "flex",
                }}
              ></QueryBuilderIcon>
              <Typography sx={{ color: "#ffffff", marginLeft: "10px" }}>
                Lịch sử mua hàng
              </Typography>
            </Box>
          </Link>
          <ShoppingCartIcon
            sx={{
              color: "#fcb900",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          ></ShoppingCartIcon>

          <PersonIcon
            aria-describedby={id}
            sx={{
              color: "#fcb900",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          ></PersonIcon>
        </Box>
        <Box sx={{ paddingLeft: "20px" }}>
          {/* <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Item 2</MenuItem>
            <MenuItem onClick={handleClose}>Item 3</MenuItem>
          </Menu> */}
          <Typography
            sx={{
              color: "white",
            }}
          >
            Liên hệ để đặt hàng: 0965807973
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
