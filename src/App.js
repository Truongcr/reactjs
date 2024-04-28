import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import ReviewMain from "./features/Review/ReviewMain";
import { ProductProvider } from "./components/Context/ProductContext";
import MainByCategory from "./components/Main/MainByCategory/MainByCategory";
import { CategoryProvider } from "./components/Context/CategoryContext";
import ProductDetailMain from "./features/Product/ProductDetail/ProductDetailMain";
import AddProduct from "./features/Product/AddProduct/AddProduct";
import { ProductDetailProvider } from "./components/Context/ProductDetailContext";

function App() {
  return (
    // <React.StrictMode>
    <ProductProvider>
      <CategoryProvider>
        <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainByCategory />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route
                path="/home-product/:category"
                element={<MainByCategory />}
              />
              <Route path="/gioithieu" element={<ReviewMain />} />
              <Route
                path="/product-detail/:productUrl"
                element={<ProductDetailMain />}
              />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </CategoryProvider>
    </ProductProvider>
    // </React.StrictMode>
  );
}

export default App;
