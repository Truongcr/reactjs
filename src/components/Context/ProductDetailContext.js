import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductDetailContext = createContext();

function ProductDetailProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState();

  useEffect(() => {
    const productId = localStorage.getItem("productId");
    setProductId(productId);

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
  }, []);

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

  const value = {
    product,
    handleClickProduct,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export { ProductDetailContext, ProductDetailProvider };
