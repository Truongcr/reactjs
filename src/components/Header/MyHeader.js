import React from "react";
import Header from "./Header";
import { HeaderProvider } from "../Context/HeaderContext";

const MyHeader = () => {
  return (
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  );
};

export default MyHeader;
