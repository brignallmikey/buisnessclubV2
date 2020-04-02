import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Tabs } from "../layout/tabs";

import Timeline from "../components/profile/Timeline";
import About from "../components/profile/About";
import Friends from "../components/profile/Friends";
import Photos from "../components/profile/Pictures";

import Layout from "../layout/Layout";
import Profile from "../layout/Profile";

function ProfilePage(props) {
  console.log("props", props);
  return (
    <Profile>
      {Tabs.map(({ name, id }) => (
        <div key={id}>
          <Link to={"/tabs/${id}"}>{name}</Link>
        </div>
      ))}
    </Profile>
  );
}
export default ProfilePage;
