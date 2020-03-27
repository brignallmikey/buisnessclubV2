import React, { Fragment } from "react";
import GroupHeader from "../components/GroupHeader";

const Group = props => {
  return (
    <Fragment>
      <GroupHeader />
      <div class="container">
    	<div class="row">
      {props.children}
      </div>
      </div>
    </Fragment>
  );
};

export default Group;
