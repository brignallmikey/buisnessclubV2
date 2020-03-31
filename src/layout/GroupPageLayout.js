import React, { Fragment } from "react";
import GroupPageHeader from "../components/GroupPageHeader";
import Layout from "./Layout";

const GroupPageLayout = props => {
  return (
    <Layout>
      <Fragment>
        <GroupPageHeader />
        <div class="container">
          <div class="row">{props.children}</div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default GroupPageLayout;
