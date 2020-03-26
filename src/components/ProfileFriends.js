import React from "react";


import Profile from '../layout/Profile';
import FriendCard from './FriendCard';


function ProfileFriends() {
  return (
    <Profile>
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block responsive-flex">
				<div class="ui-block-title">
					<div class="h6 title">James’s Friends (86)</div>
					<form class="w-search">
						<div class="form-group with-button">
							<input class="form-control" type="text" placeholder="Search Friends..."/>
							<button>
								{/*<svg class="olymp-magnifying-glass-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>*/}
							</button>
						</div>
					</form>
					<a href="#" class="more">{/*<svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
				</div>
			</div>
        </div>

        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
<FriendCard />
</div>
<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
<FriendCard />

        </div>
    
    </Profile>
  );
}
export default ProfileFriends;
