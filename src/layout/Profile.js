import React, { Fragment } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Layout from "./Layout";

const Profile = props => {
  return (
    <Layout>
      <Fragment>
        <ProfileHeader />
        <div class="container">
          <div class="row">{props.children}</div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default Profile;
