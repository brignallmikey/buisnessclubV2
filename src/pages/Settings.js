import React, { useState } from "react";
import Layout from "../layout/Layout";
import Settings from "../layout/Settings";
import PersonalInformation from "../components/settings/Information";
import AccountSettings from "../components/settings/AccountSettings";
import ChangePassword from "../components/settings/ChangePassword";
import HobbiesAndInterests from "../components/settings/HobbiesAndInterests";
import EducationHistory from "../components/profile/EducationHistory";
import Notifications from "../components/settings/Notifications";
import FriendRequest from "../components/settings/FriendRequests";
import FavePage from "../components/settings/FavePage";
import settingsMenu from "../components/settings/Sidebar";
import SettingsHeader from "../components/settings/Header";
import SettingsSidebar from "../components/settings/Sidebar";

const SettingsPage = () => {
  const [settingsMenu, setSettingsMenu] = useState("personal");
  return (
    <Layout>
      <SettingsHeader />

      <div class="container">
        <div class="row">
          <SettingsSidebar
            settingsMenu={settingsMenu}
            setSettingsMenu={setSettingsMenu}
          />
          <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            {settingsMenu === "personal" && <PersonalInformation />}
            {settingsMenu === "account" && <AccountSettings />}
            {settingsMenu === "password" && <ChangePassword />}
            {settingsMenu === "hobbiesinterests" && <HobbiesAndInterests />}
            {settingsMenu === "educationemployment" && <EducationHistory />}
            {settingsMenu === "notifications" && <Notifications />}
            {settingsMenu === "friendrequests" && <FriendRequest />}
            {settingsMenu === "favepage" && <FavePage />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
