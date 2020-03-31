import React, { useState } from "react";

const SettingsSidebar = () => {
  const [settingsMenu, setSettingsMenu] = useState("personal");
  return (
    <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
      <div className="ui-block">
        <div className="your-profile">
          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">Your PROFILE</h6>
          </div>

          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h6 className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Profile Settings
                    {/*<svg className="olymp-dropdown-arrow-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>*/}
                  </a>
                </h6>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <ul className="your-profile-menu">
                  <li>
                    <div
                      className={` ${
                        settingsMenu === "personal" ? "active" : ""
                      }`}
                      onClick={() => setSettingsMenu("personal")}
                      tabIndex={0}
                      onKeyDown={() => setSettingsMenu("personal")}
                    >
                      Personal Information
                    </div>
                  </li>
                  <li>
                    <div
                      className={` ${
                        settingsMenu === "account" ? "active" : ""
                      }`}
                      onClick={() => setSettingsMenu("account")}
                      tabIndex={0}
                      onKeyDown={() => setSettingsMenu("account")}
                    >
                      Account Settings
                    </div>
                  </li>
                  <li>
                    <div
                      className={` ${
                        settingsMenu === "password" ? "active" : ""
                      }`}
                      onClick={() => setSettingsMenu("password")}
                      tabIndex={0}
                      onKeyDown={() => setSettingsMenu("password")}
                    >
                      Change Password
                    </div>
                  </li>
                  <li>
                    <div
                      className={` ${
                        settingsMenu === "hobbiesinterests" ? "active" : ""
                      }`}
                      onClick={() => setSettingsMenu("hobbiesinterests")}
                      tabIndex={0}
                      onKeyDown={() => setSettingsMenu("hobbiesinterests")}
                    >
                      Hobbies and Interests
                    </div>
                  </li>
                  <li>
                    <div
                      className={` ${
                        settingsMenu === "educationemployment" ? "active" : ""
                      }`}
                      onClick={() => setSettingsMenu("educationemployment")}
                      tabIndex={0}
                      onKeyDown={() => setSettingsMenu("educationemployment")}
                    >
                      Education and Employment
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ui-block-title">
            <div
              className={`h6 title ${
                settingsMenu === "notifications" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("notifications")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("notifications")}
            >
              Notifications
            </div>
            <a href="#" className="items-round-little bg-primary">
              8
            </a>
          </div>
          {/*<div className="ui-block-title">
						<a href="34-YourAccount-ChatMessages.html" className="h6 title">Chat / Messages</a>
			</div>*/}
          <div className="ui-block-title">
            <div
              className={`h6 title ${
                settingsMenu === "friendrequests" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("friendrequests")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("friendrequests")}
            >
              Friend Requests
            </div>
            <a href="#" className="items-round-little bg-blue">
              4
            </a>
          </div>
          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">FAVOURITE PAGE</h6>
          </div>
          <div className="ui-block-title">
            <div
              className={`h6 title ${
                settingsMenu === "favepage" ? "active" : ""
              }`}
              onClick={() => setSettingsMenu("favepage")}
              tabIndex={0}
              onKeyDown={() => setSettingsMenu("favepage")}
            >
              Favourite Page
            </div>
          </div>
          <div className="ui-block-title">
            {/*}
						<a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
