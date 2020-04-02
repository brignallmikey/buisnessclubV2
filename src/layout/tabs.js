import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Timeline from "../components/profile/Timeline";

export const Tabs = [
  {
    name: "Profile",
    id: "profile",
    description: "Users profile",
    resources: [
      {
        name: "Timeline",
        id: "profile-timeline",
        description: "users timeline",
        url: "/timeline"
      },
      {
        name: "About",
        id: "profile-about",
        description: "users about",
        url: "/about"
      },
      {
        name: "Friends",
        id: "profile-friends",
        description: "users friends",
        url: "/friends"
      },
      {
        name: "Photos",
        id: "profile-photos",
        description: "users photos",
        url: "/photos"
      }
    ]
  }
];
export default { Tabs };
