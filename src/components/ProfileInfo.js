import React from 'react';


function ProfileInfo() {
  return (    
    <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Profile Intro</h6>
				</div>
				<div className="ui-block-content">

					{/* personal info */}
					
					<ul className="widget w-personal-info item-block">
						<li>
							<span className="title">About Me:</span>
							<span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
						</li>
						<li>
							<span className="title">Favourite TV Shows:</span>
							<span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
						</li>
						<li>
							<span className="title">Favourite Music Bands / Artists:</span>
							<span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
						</li>
					</ul>
					
					{/*personal info end*/}
					
				</div>
			</div>
  );
}

export default ProfileInfo;