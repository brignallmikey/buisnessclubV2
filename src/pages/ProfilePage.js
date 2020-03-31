import React from "react";

import { TesterUserData } from "../assets/databaseprofiles/database-profile-tester";
import Profileheader from "../components/ProfileHeader";
import Timeline from "./ProfileTimelinePage";
import About from "./ProfileAboutPage";
import Friends from "./ProfileFriendsPage";
import Photos from "./ProfilePhotosPage";
import Videos from "./ProfileVideosPage";
import Layout from "../layout/Layout";

function ProfilePage() {
  return (
    <Layout>
      <Profileheader />

      <Timeline />
    </Layout>
  );
}
export default ProfilePage;
