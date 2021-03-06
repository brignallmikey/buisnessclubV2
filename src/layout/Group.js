import React, { Fragment } from "react";
import GroupHeader from "../components/GroupHeader";
import Layout from "../layout/Layout";

const Group = props => {
  return (
    <Layout>
      <Fragment>
        <GroupHeader />
        <div class="container">
          <div class="row">{props.children}</div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default Group;
