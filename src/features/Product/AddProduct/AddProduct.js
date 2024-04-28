import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
// import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
// import { AppBar, Container, Toolbar } from "@material-ui/core";

const product = {
  productName: "",
  productTitle: "",
  categoryId: "",
  file: "",
};

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pathFile, setPathFile] = useState(null);
  const [displayIconCamera, setDisplayIconCamera] = useState(true);
  const [deleteImage, setDeleteImage] = useState(false);
  const [category, setCategory] = useState([]);
  const [boldRadio, setBoldRadio] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [productName, setProductName] = useState();
  const [productTitle, setProductTitle] = useState();

  useEffect(() => {
    console.log("load category");
    // Gọi API hoặc thực hiện các tác vụ sau khi render
    fetch("http://localhost:8086/api/product/category/get-all")
      .then((response) => response.json())
      .then((result) => {
        setCategory(result);
      });
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Do something with the selected image, e.g., upload to a server
      setSelectedImage(URL.createObjectURL(file));
      setDisplayIconCamera(false);
      setDeleteImage(true);

      const multipartFile = new FormData();
      multipartFile.append("file", file);
      try {
        const response = await axios.post(
          `http://localhost:8086/api/product/upload-file-to-local`,
          multipartFile,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("path: " + response.data);
        setPathFile(response.data);
      } catch (error) {
        console.error("Lỗi khi gửi yêu cầu:", error);
      }
    }
  };

  const handleDeleteImage = (event) => {
    console.log("da v" + selectedImage);
    setSelectedImage(false);
    setDisplayIconCamera(true);
    setDeleteImage(false);
  };

  useEffect(() => {
    console.log(boldRadio);
  }, [boldRadio]);

  const handleSelectCategry = (event) => {
    console.log("category: " + event.target.value);
    if (boldRadio.includes(event.target.value)) {
      const updateList = boldRadio.filter(
        (item) => item !== event.target.value
      );
      setBoldRadio(updateList);
      // console.log(boldRadio);
    } else {
      setBoldRadio([...boldRadio, event.target.value]);
      // console.log(boldRadio);
    }
  };

  const handleChangeProductName = (event) => {
    setProductName(event.target.value);
    console.log(productName);
  };
  const handleChangeProductTitle = (event) => {
    setProductTitle(event.target.value);
  };

  const handleAddProduct = (event) => {
    const product = {
      productName: productName,
      productTitle: productTitle,
      categoryId: boldRadio,
      pathFile: pathFile,
    };
    console.log("product: " + product.data);
    try {
      const response = axios.post(
        `http://localhost:8086/api/product/create-product`,
        product
      );
      console.log("path: " + response.data);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        margin: "5% 20% 20%",
        boxSizing: "border-box",
      }}
    >
      <Box>
        <Typography>Hình ảnh sản phẩm</Typography>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputLabel htmlFor="image-upload-input">Chọn ảnh</InputLabel>
          <Input
            id="image-upload-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            inputProps={{ "aria-label": "upload image" }}
          />
          <InputAdornment position="end">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() =>
                document.getElementById("image-upload-input").click()
              }
            >
              {displayIconCamera && <PhotoCamera />}
            </IconButton>
          </InputAdornment>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
          {deleteImage && (
            <Button onClick={handleDeleteImage}>
              <DeleteForeverOutlinedIcon />
            </Button>
          )}
        </Box>
      </Box>
      <Box>
        <Typography>Danh mục loại sản phẩm</Typography>
      </Box>
      <Box>
        <Typography>Loại sản phẩm</Typography>
        <List>
          {category.map((item) => (
            <ListItem key={item.categoryId}>
              <Checkbox
                key={item.categoryId}
                value={item.categoryId}
                onClick={handleSelectCategry}
              ></Checkbox>
              {item.categoryName}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography sx={{ width: "150px" }}>Tên sản phẩm</Typography>
        <TextField
          label="Nhập tên sản phẩm"
          variant="outlined"
          fullWidth
          onChange={handleChangeProductName}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography sx={{ width: "150px" }}>Mô tả sản phẩm</Typography>
        {/* <Box sx={{ display: "flex" }}> */}
        <TextField
          label="Nhập mô tả sản phẩm"
          variant="outlined"
          fullWidth
          onChange={handleChangeProductTitle}
        />
      </Box>
      {/* </Box> */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button
          type="submit"
          onClick={handleAddProduct}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          Thêm sản phẩm
        </Button>
      </Box>
      {/* </form> */}
    </Box>
  );
};

export default AddProduct;
