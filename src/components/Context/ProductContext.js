import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [categoryTypeId, setCategoryTypeId] = useState();

  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState();

  const [searchProductRequest, setSearchProductRequest] = useState({});

  // products.push(product);
  useEffect(() => {
    const id = localStorage.getItem("categoryTypeId");
    if (id === "null") {
      axios
        .post(
          "http://localhost:8086/api/product/advance-search",
          searchProductRequest
        )
        .then((response) => {
          // Xử lý dữ liệu trả về từ server
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error(error);
        });
    } else {
      handleClickCategory(id);
    }
  }, []);

  const handleClickCategory = async (categoryTypeId) => {
    console.log("categoryTypeId", categoryTypeId);
    setCategoryTypeId(categoryTypeId);

    const request = {
      categoryId: categoryTypeId,
    };

    await axios
      .post("http://localhost:8086/api/product/advance-search", request)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    localStorage.setItem("categoryTypeId", categoryTypeId);
    setCategoryId(categoryId);
  };

  const handleClickHome = () => {
    console.log("day");
    axios
      .post(
        "http://localhost:8086/api/product/advance-search",
        searchProductRequest
      )
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

  const handleClickProduct = (productId) => {
    const requestParams = {
      productId: productId,
    };

    axios
      .get("http://localhost:8086/api/product/find-by-id", {
        params: requestParams,
      })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    localStorage.setItem("productId", productId);
  };

  const handleClickSearch = async (searchValue) => {
    const request = {
      searchValue: searchValue,
    };

    await axios
      .post("http://localhost:8086/api/product/advance-search", request)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    localStorage.setItem("categoryTypeId", categoryTypeId);
    setCategoryId(categoryId);
  };

  const handleClickSearchPrice = async (from, to) => {
    console.log("price", from, to);
    const request = {
      priceStart: from,
      priceEnd: to,
    };

    await axios
      .post("http://localhost:8086/api/product/advance-search", request)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    localStorage.setItem("categoryTypeId", categoryTypeId);
    setCategoryId(categoryId);
  };

  const value = {
    product,
    products,
    handleClickCategory,
    handleClickHome,
    handleClickProduct,
    handleClickSearch,
    handleClickSearchPrice,
    categoryId,
    categoryTypeId,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
