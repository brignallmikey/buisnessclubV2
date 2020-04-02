import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProfileHeader from "../components/profile/Header";
import Timeline from "../components/profile/Timeline";
import About from "../components/profile/About";
import Friends from "../components/profile/Friends";
import Photos from "../components/profile/Pictures";

import Layout from "../layout/Layout";

function ProfilePage(props) {
  console.log("props", props);
  return (
    <Layout>
      <ProfileHeader />

      <Router>
        <Route exact path="/" render={props => <Timeline {...props} />} />

        <Route exact path="/about" render={props => <About {...props} />} />

        <Route exact path="/friends" render={props => <Friends {...props} />} />

        <Route exact path="/photos" render={props => <Photos {...props} />} />
      </Router>
    </Layout>
  );
}
export default ProfilePage;
