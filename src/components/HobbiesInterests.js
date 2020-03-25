import React from 'react';



function HobbiesInterests() {
  return (    
  
    <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Hobbies and Interests</h6>
					<a href="#" className="more">{/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
				</div>
				<div className="ui-block-content">
					<div className="row">
						<div className="col col-lg-6 col-md-6 col-sm-12 col-12">

							
							{/*personal info*/}
							
							<ul className="widget w-personal-info item-block">
								<li>
									<span className="title">Hobbies:</span>
									<span className="text">I like to ride the bike to work, swimming, and working out. I also like
															reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.
														</span>
								</li>
								<li>
									<span className="title">Favourite TV Shows:</span>
									<span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
								</li>
								<li>
									<span className="title">Favourite Movies:</span>
									<span className="text">Idiocratic, The Scarred Wizard and the Fire Crown,  Crime Squad, Ferrum Man. </span>
								</li>
								<li>
									<span className="title">Favourite Games:</span>
									<span className="text">The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto. </span>
								</li>
							</ul>
							
							{/*personal info end*/}
						</div>
						<div className="col col-lg-6 col-md-6 col-sm-12 col-12">

							
						{/*personal info*/}
							
							<ul className="widget w-personal-info item-block">
								<li>
									<span className="title">Favourite Music Bands / Artists:</span>
									<span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
								</li>
								<li>
									<span className="title">Favourite Books:</span>
									<span className="text">The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</span>
								</li>
								<li>
									<span className="title">Favourite Writers:</span>
									<span className="text">Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </span>
								</li>
								<li>
									<span className="title">Other Interests:</span>
									<span className="text">Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</span>
								</li>
							</ul>
							
							{/*personal info end*/}
						</div>
					</div>
				</div>
			</div>
            
  );
}

export default HobbiesInterests;