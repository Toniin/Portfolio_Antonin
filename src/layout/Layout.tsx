import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
