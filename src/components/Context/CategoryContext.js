import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import ProductContent from "../../features/Product/ProductContent";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categorys, setCategorys] = useState([]);

  // products.push(product);
  useEffect(() => {
    axios
      .get("http://localhost:8086/api/product/category-type/get-all")
      .then((response) => {
        // Xử lý dữ liệu trả về từ server
        console.log(response.data);
        setCategorys(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  }, []);

  const productContext = useContext(ProductContent);

  const handleClickCategory = (categoryId) => {
    console.log("category Context ");
    productContext.handleClickCategory(categoryId);
  };

  // const handleClickHome = () => {
  //   setProducts(productList);
  // };

  const value = {
    categorys,
    handleClickCategory,
    // handleClickHome,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryContext, CategoryProvider };
