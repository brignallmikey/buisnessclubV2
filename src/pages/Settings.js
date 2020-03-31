import React, { useState } from "react";
import Settings from "../layout/Settings";
import PersonalInformation from "../components/PersonalInformation";
import AccountSettings from "../components/AccountSettings";
import ChangePassword from "../components/ChangePassword";
import HobbiesAndInterests from "../components/HobbiesAndInterests";
import EducationHistory from "../components/EducationHistory";
import Notifications from "../components/Notifications";
import FriendRequest from "../components/FriendRequests";
import FavePage from "../components/FavePage";
import settingsMenu from "../components/SettingsSidebar";
import SettingsHeader from "../components/SettingsHeader";
import SettingsSidebar from "../components/SettingsSidebar";

const SettingsPage = () => {
  const [settingsMenu, setSettingsMenu] = useState("personal");
  return (
    <>
      <SettingsHeader />

      <div class='container'>
        <div class='row'>
          <SettingsSidebar settingsMenu={settingsMenu} setSettingsMenu={setSettingsMenu} />
          <div class='col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12'>
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
    </>
  );
};

export default SettingsPage;
