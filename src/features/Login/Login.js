import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Popover,
  Checkbox,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây, ví dụ: gửi dữ liệu đăng nhập lên máy chủ
    console.log("Đăng nhập với dữ liệu:", formData);
  };

  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = () => {
    setChecked(!checked); // Đảo ngược trạng thái khi người dùng nhấn vào ô checkbox
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "30px",
        height: "100vh",
        width: " 100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          position: "relative",
          boxSizing: "content-box",
          maxWidth: "875px",
          backgroundColor: "white",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            display: "block",
            boxSizing: "border-box",
            width: "50%",
            padding: "0 30px",
          }}
        >
          <Box sx={{ padding: "0 10px" }}>
            <Typography>ĐĂNG NHẬP</Typography>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Tên đăng nhập"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mật khẩu"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <Checkbox
                checked={checked}
                onChange={handleChangeCheckBox}
                color="primary" // Màu chọn của ô checkbox (primary là màu mặc định)
              />
              <label>Ghi nhớ mật khẩu</label>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Đăng nhập
              </Button>
            </form>
          </Box>
        </Box>

        <Box
          sx={{
            display: "block",
            boxSizing: "border-box",
            width: "50%",
            padding: "0 30px",
          }}
        >
          <Typography>Đăng ký</Typography>
          <Box>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Tên đăng nhập"
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mật khẩu"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Đăng ký
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
