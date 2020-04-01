import React from "react";

import HobbiesInterests from "./HobbiesInterests";
import Profile from "../layout/Profile";
import Info from "./Information";

function ProfileAbout(props) {
  return (
    <Profile location={props.location}>
      {/*;eft*/}
      <div class="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
        <Info />
      </div>
      {/*right*/}
      <div class="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
        <HobbiesInterests />
      </div>
    </Profile>
  );
}
export default ProfileAbout;
