import React from "react";
import ProductDetail from "./ProductDetail";
import { ProductDetailProvider } from "../../../components/Context/ProductDetailContext";

const MyProductDetail = () => {
  return (
    <ProductDetailProvider>
      <ProductDetail />
    </ProductDetailProvider>
  );
};

export default MyProductDetail;
