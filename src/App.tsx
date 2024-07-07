import React from "react";
import Header from "./components/common/Header";
import { Register } from "./pages/Register";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Register />
    </div>
  );
};
