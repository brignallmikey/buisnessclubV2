import React from "react";


function GroupCard() {
  return (
<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
<div class="ui-block" data-mh="friend-groups-item">
				
				
				
				<div class="friend-item friend-groups">
				
					<div class="friend-item-content">
				
						<div class="more">
							{/*<svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
							<ul class="more-dropdown">
								<li>
									<a href="#">Report Profile</a>
								</li>
								<li>
									<a href="#">Block Profile</a>
								</li>
								<li>
									<a href="#">Turn Off Notifications</a>
								</li>
							</ul>
						</div>
						<div class="friend-avatar">
							<div class="author-thumb">
								<img src="img/logo.png" alt="Olympus"/>
							</div>
							<div class="author-content">
								<a href="#" class="h5 author-name">My Family</a>
								<div class="country">6 Friends in the Group</div>
							</div>
						</div>
				
						<ul class="friends-harmonic">
							<li>
								<a href="#">
									<img src="img/friend-harmonic5.jpg" alt="friend"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic10.jpg" alt="friend"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic7.jpg" alt="friend"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic8.jpg" alt="friend"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/friend-harmonic2.jpg" alt="friend"/>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="img/avatar30-sm.jpg" alt="author"/>
								</a>
							</li>
						</ul>
				
				
						<div class="control-block-button">
							<a href="#" class="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
								{/*<svg class="olymp-happy-faces-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>*/}
							</a>
				
							<a href="#" class="btn btn-control btn-grey-lighter">
								{/*<svg class="olymp-settings-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg>*/}
							</a>
				
						</div>
					</div>
				</div>
				
							</div>

			</div>

    
  );
}

export default GroupCard;
