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


const SettingsPage = () => {
	const [settingsMenu, setSettingsMenu] = useState("personal");
  return (
<Settings>

{settingsMenu === "personal" && <PersonalInformation />}
              {settingsMenu === "account" && <AccountSettings />}
              {settingsMenu === "password" && <ChangePassword />}
              {settingsMenu === "hobbiesinterests" && <HobbiesAndInterests />}
              {settingsMenu === "educationemployment" && <EducationHistory />}
              {settingsMenu === "notifications" && <Notifications />}
              {settingsMenu === "friendrequests" && <FriendRequest />}
              {settingsMenu === "favepage" && <FavePage />}
  
</Settings>
    

    
  );
}

export default SettingsPage;
