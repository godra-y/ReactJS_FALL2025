import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./style.css";

function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Outlet /> 
      </div>
    </>
  );
}

export default RootLayout;
