import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState([]);

  const request = {};

  const handleClickHome = () => {
    console.log("day");
    axios
      .post("http://localhost:8086/api/product/advance-search", request)
      .then((response) => {
        // Xử lý dữ liệu trả về từ server
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
    localStorage.removeItem("productId");
    localStorage.removeItem("categoryTypeId");
  };

  const value = {
    product,
    products,
    handleClickHome,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export { HeaderContext, HeaderProvider };
