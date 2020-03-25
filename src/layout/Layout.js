import React, { Fragment } from "react";

import Header from "./Header";
import SidebarLeft from "./SiderbarLeft";

const Layout = props => {
  return (
    <Fragment>
      <SidebarLeft />
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Layout;
