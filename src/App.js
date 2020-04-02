import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/sass/main.scss";
import "./assets/sass/fonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ProfilePage from "./pages/ProfilePage";

import GroupLanding from "./pages/GroupLanding";
import GroupTimeline from "./components/group/Timeline";
import GroupAbout from "./components/group/About";
import GroupPhotos from "./components/group/PhotoTab";
import GroupEvents from "./components/group/EventTab";

import SettingsPage from "./pages/Settings";

import SignUp from "./pages/SignUp";
import Newsfeed from "./pages/Newsfeed";

{
  /*import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Newsfeed from "./pages/Newsfeed";

import ProfileTimelinePage from "./pages/ProfileTimelinePage";
import ProfileAbout from "./pages/ProfileAboutPage";
import ProfileFriendsPage from "./pages/ProfileFriendsPage";
import ProfilePhotosPage from "./pages/ProfilePhotosPage";
import ProfileVideosPage from "./pages/ProfileVideosPage";


import Personal from "./pages/Personal";
import Account from "./pages/Account";
import Password from "./pages/Password";
import HobbiesInterests from "./pages/HobbiesInterests";
import EducationEmployment from "./pages/EducationEmployment";

import GroupFriend from "./pages/GroupFriend";
import GroupTimeline from "./pages/GroupTimeline";
import GroupAbout from "./pages/GroupAbout";
import GroupMembers from "./pages/GroupMembersPage";
import GroupPhotos from "./pages/GroupPhotos";*/
}

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={props => <SignUp {...props} />} />
        {/*<Route exact path='/signup' render={props => <SignUp {...props} />} />*/}
        <Route
          exact
          path="/newsfeed"
          render={props => <Newsfeed {...props} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <ProfilePage {...props} />}
        />
        */}
        <Route
          exact
          path="/settings"
          render={props => <SettingsPage {...props} />}
        />
        <Route
          exact
          path="/groups"
          render={props => <GroupLanding {...props} />}
        />
        <Route
          exact
          path="/grouppage"
          render={props => <GroupTimeline {...props} />}
        />
        <Route
          exact
          path="/grouppage/about"
          render={props => <GroupAbout {...props} />}
        />
        <Route
          exact
          path="/grouppage/photos"
          render={props => <GroupPhotos {...props} />}
        />
        <Route
          exact
          path="/grouppage/events"
          render={props => <GroupEvents {...props} />}
        />
        {/*}
        <Route exact path='/groups/profile' render={props => <GroupTimeline {...props} />} />
        <Route exact path='/groups/profile/about' render={props => <GroupAbout {...props} />} />
        <Route exact path='/groups/profile/members' render={props => <GroupMembers {...props} />} />
  <Route exact path='/groups/profile/photos' render={props => <GroupPhotos {...props} />} />*/}
      </Router>
    </div>
  );
}

export default App;
