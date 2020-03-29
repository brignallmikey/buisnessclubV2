import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/sass/main.scss";
import "./assets/sass/fonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./layout/Layout";

import Header from "./layout/Header";
import SidebarLeft from "./layout/SiderbarLeft";
// import Newsfeed from "./pages/Newsfeed";
import ProfileHeader from "./components/ProfileHeader";
import ProfilePost from "./components/ProfilePost";
import ProfileTimeline from "./components/ProfileTimeline";
import ProfileAbout from "./components/ProfileAbout";
import ProfileFriends from "./components/ProfileFriends";
import ProfilePictures from "./components/ProfilePictures";

import GroupLanding from "./pages/GroupLanding";

import SettingsPage from "./pages/Settings";

import SignUp from "./pages/SignUp";

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
        {/*<Route exact path='/signup' render={props => <SignUp {...props} />} />
        <Route exact path='/newsfeed' render={props => <Newsfeed {...props} />} />*/}

        <Route
          exact
          path="/profile"
          render={props => <ProfileTimeline {...props} />}
        />
        <Route
          path="/profile/about"
          render={props => <ProfileAbout {...props} />}
        />
        <Route
          exact
          path="/profile/friends"
          render={props => <ProfileFriends {...props} />}
        />
        <Route
          exact
          path="/profile/photos"
          render={props => <ProfilePictures {...props} />}
        />
        {/*}
        <Route exact path='/profile/videos' render={props => <ProfileVideosPage {...props} />} />

        */}
        <Route
          exact
          path="/settings"
          render={props => <SettingsPage {...props} />}
        />
        {/*}
        <Route exact path='/profile/settings/personal' render={props => <Personal {...props} />} />
        <Route exact path='/profile/settings/account' render={props => <Account {...props} />} />
        <Route exact path='/profile/settings/password' render={props => <Password {...props} />} />
        <Route exact path='/profile/settings/hobbiesinterests' render={props => <HobbiesInterests {...props} />} />
        <Route exact path='/profile/settings/educationemployment' render={props => <EducationEmployment {...props} />} />

        */}
        <Route
          exact
          path="/groups"
          render={props => <GroupLanding {...props} />}
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
