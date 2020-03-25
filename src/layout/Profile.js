import React, { Fragment } from "react";
import ProfileHeader from "../components/ProfileHeader";

const Profile = props => {
  return (
    <Fragment>
      <ProfileHeader />
      <div class="container">
    	<div class="row">
      {props.children}
      </div>
      </div>
    </Fragment>
  );
};

export default Profile;
