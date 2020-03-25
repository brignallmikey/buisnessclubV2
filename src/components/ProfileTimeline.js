import React from "react";

import ProfilePost from '../components/ProfilePost';
import ProfileInfo from '../components/ProfileInfo';
import ProfilePhotos from '../components/ProfilePhotos';
//import Favouriteshort from '../components/ProfileFavouriteShort';
//import LatestPhotos from '../components/ProfileLatestPhotos.js';
//import BlogPosts from '../components/ProfileBlogPosts';
import Profile from '../layout/Profile';

function ProfileTimeline() {
  return (
    <Profile>
    {/*left*/}
    <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
<ProfileInfo />

    </div>
    {/*middle*/}
    <div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
			<div id="newsfeed-items-grid">
<ProfilePost />


        </div>
      </div>
    {/*right*/}
    <div class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
<ProfilePhotos/>

    </div>
    </Profile>
  );
}
export default ProfileTimeline;
