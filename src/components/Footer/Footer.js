import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Footer = () => {
  const commonSxLi = {
    paddingLeft: "7px",
    display: "inline-block",
    color: "black",
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F0F8FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: "30px",
          margin: "0 100px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "30%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "70%",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <TextField
            placeholder="Nhập email của bạn"
            backgroundColor="black"
            sx={{
              width: "50%",
              borderRadius: "30px",
              color: "black",
            }}
          ></TextField>
          <Button>Đăng ký</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "auto",
          padding: "30px",
          flexDirection: "row",
          justifyContent: "center",
          //   alignItems: "center",
          color: "black",
        }}
      >
        <Box
          sx={{
            display: "block",
            boxSizing: "border-box",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography sx={{ display: "block", marginLeft: "15.5px" }}>
            CÔNG TY CỔ PHẦN TRẦM HƯƠNG
          </Typography>
          <List
            sx={{
              display: "block",
              // color: "rgb(255 255 255 / 60%)",
              marginBottom: "10px",
            }}
          >
            <ListItem>
              <LocationOnIcon />
              <Typography sx={commonSxLi}>
                Mễ trì, Nam Từ Liên, Hà Nội
              </Typography>
            </ListItem>
            <ListItem>
              <LocalPhoneIcon />
              <Typography sx={commonSxLi}>0965807973</Typography>
            </ListItem>
            <ListItem>
              <LocationOnIcon />
              <Typography sx={commonSxLi}>
                Thanh Liệt, Thanh Trì, Hà Nội
              </Typography>
            </ListItem>
            <ListItem>
              <LocalPhoneIcon />
              <Typography sx={commonSxLi}>0338584752</Typography>
            </ListItem>
            <ListItem>
              <EmailIcon />
              <Typography sx={commonSxLi}>truongcr1609@gmail.com</Typography>
            </ListItem>
            <ListItem>
              <AccessTimeIcon />
              <Typography sx={commonSxLi}>8h00 AM - 10h00 PM</Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            height: "auto",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ paddingLeft: "15.5px" }}>CHÍNH SÁCH</Typography>
          <List
            sx={{
              display: "block",
              // color: "rgb(255 255 255 / 60%)",
              marginBottom: "10px",
            }}
          >
            <ListItem>
              <Typography>Chính sách bảo vệ</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách thành viên</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách vận chuyển</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đăng ký Đại Lý</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đổi trả và bảo hành</Typography>
            </ListItem>
            <ListItem>
              <Typography>Hướng dẫn thanh toán</Typography>
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            height: "auto",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ paddingLeft: "15.5px" }}>CHÍNH SÁCH</Typography>
          <List
            sx={{
              display: "block",
              // color: "rgb(255 255 255 / 60%)",
              marginBottom: "10px",
            }}
          >
            <ListItem>
              <Typography>Chính sách bảo vệ</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách thành viên</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách vận chuyển</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đăng ký Đại Lý</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đổi trả và bảo hành</Typography>
            </ListItem>
            <ListItem>
              <Typography>Hướng dẫn thanh toán</Typography>
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            height: "auto",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ paddingLeft: "15.5px" }}>CHÍNH SÁCH</Typography>
          <List
            sx={{
              display: "block",
              // color: "rgb(255 255 255 / 60%)",
              marginBottom: "10px",
            }}
          >
            <ListItem>
              <Typography>Chính sách bảo vệ</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách thành viên</Typography>
            </ListItem>
            <ListItem>
              <Typography>Chính sách vận chuyển</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đăng ký Đại Lý</Typography>
            </ListItem>
            <ListItem>
              <Typography>Đổi trả và bảo hành</Typography>
            </ListItem>
            <ListItem>
              <Typography>Hướng dẫn thanh toán</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
