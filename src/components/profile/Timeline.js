import React from "react";

import Post from "../newsfeed/Post";
import Info from "./InfoTimeline";
import ProfilePhotos from "../ProfilePhotos";
import Profile from "../../layout/Profile";

function ProfileTimeline(props) {
  return (
    <Profile location={props.location}>
      {/*left*/}
      <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
        <Info />
      </div>
      {/*middle*/}
      <div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <div id="newsfeed-items-grid">
          <Post />
        </div>
      </div>
      {/*right*/}
      <div class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
        <ProfilePhotos />
      </div>
    </Profile>
  );
}
export default ProfileTimeline;
