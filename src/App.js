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

{/*import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Newsfeed from "./pages/Newsfeed";

import ProfileTimelinePage from "./pages/ProfileTimelinePage";
import ProfileAbout from "./pages/ProfileAboutPage";
import ProfileFriendsPage from "./pages/ProfileFriendsPage";
import ProfilePhotosPage from "./pages/ProfilePhotosPage";
import ProfileVideosPage from "./pages/ProfileVideosPage";

import Settings from "./pages/Settings";
import Personal from "./pages/Personal";
import Account from "./pages/Account";
import Password from "./pages/Password";
import HobbiesInterests from "./pages/HobbiesInterests";
import EducationEmployment from "./pages/EducationEmployment";

import GroupFriend from "./pages/GroupFriend";
import GroupTimeline from "./pages/GroupTimeline";
import GroupAbout from "./pages/GroupAbout";
import GroupMembers from "./pages/GroupMembersPage";
import GroupPhotos from "./pages/GroupPhotos";*/}

function App() {
  return (
    <div>
      <Layout>
              <Router>
        {/*<Route exact path='/' render={props => <LogIn {...props} />} />
        <Route exact path='/signup' render={props => <SignUp {...props} />} />
        <Route exact path='/newsfeed' render={props => <Newsfeed {...props} />} />

        */}<Route exact path='/profile/' render={props => <ProfileTimeline {...props} />} />
        <Route path='/profile/about' render={props => <ProfileAbout {...props} />} />
        {/*<Route exact path='/profile/friends' render={props => <ProfileFriendsPage {...props} />} />
        <Route exact path='/profile/photos' render={props => <ProfilePhotosPage {...props} />} />
        <Route exact path='/profile/videos' render={props => <ProfileVideosPage {...props} />} />

        <Route exact path='/profile/settings' render={props => <Settings {...props} />} />
        <Route exact path='/profile/settings/personal' render={props => <Personal {...props} />} />
        <Route exact path='/profile/settings/account' render={props => <Account {...props} />} />
        <Route exact path='/profile/settings/password' render={props => <Password {...props} />} />
        <Route exact path='/profile/settings/hobbiesinterests' render={props => <HobbiesInterests {...props} />} />
        <Route exact path='/profile/settings/educationemployment' render={props => <EducationEmployment {...props} />} />

        <Route exact path='/groups' render={props => <GroupFriend {...props} />} />
        <Route exact path='/groups/profile' render={props => <GroupTimeline {...props} />} />
        <Route exact path='/groups/profile/about' render={props => <GroupAbout {...props} />} />
        <Route exact path='/groups/profile/members' render={props => <GroupMembers {...props} />} />
  <Route exact path='/groups/profile/photos' render={props => <GroupPhotos {...props} />} />*/}
      </Router>
      </Layout>


    </div>
  );
}

export default App;
