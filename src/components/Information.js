import React from 'react';



function Info() {
  return (    
  
    <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Personal Info</h6>
					<a href="#" className="more">{/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
				</div>
				<div className="ui-block-content">

					
					{/*personal info*/}
					
					<ul className="widget w-personal-info">
						<li>
							<span className="title">About Me:</span>
							<span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the
													“Daydreams” Agency in Pier 56
												</span>
						</li>
						<li>
							<span className="title">Birthday:</span>
							<span className="text">December 14th, 1980</span>
						</li>
						<li>
							<span className="title">Birthplace:</span>
							<span className="text">Austin, Texas, USA</span>
						</li>
						<li>
							<span className="title">Lives in:</span>
							<span className="text">San Francisco, California, USA</span>
						</li>
						<li>
							<span className="title">Occupation:</span>
							<span className="text">UI/UX Designer</span>
						</li>
						<li>
							<span className="title">Joined:</span>
							<span className="text">April 31st, 2014</span>
						</li>
						<li>
							<span className="title">Gender:</span>
							<span className="text">Male</span>
						</li>
						<li>
							<span className="title">Status:</span>
							<span className="text">Married</span>
						</li>
						<li>
							<span className="title">Email:</span>
							<a href="#" className="text">jspiegel@yourmail.com</a>
						</li>
						<li>
							<span className="title">Website:</span>
							<a href="#" className="text">daydreamsagency.com</a>
						</li>
						<li>
							<span className="title">Phone Number:</span>
							<span className="text">(044) 555 - 4369 - 8957</span>
						</li>
						<li>
							<span className="title">Religious Belifs:</span>
							<span className="text">-</span>
						</li>
						<li>
							<span className="title">Political Incline:</span>
							<span className="text">Democrat</span>
						</li>
					</ul>
					
					{/*end info start socials*/}}
					
					<div className="widget w-socials">
						<h6 className="title">Other Social Networks:</h6>
						<a href="#" className="social-item bg-facebook">
							<i className="fab fa-facebook-f" aria-hidden="true"></i>
							Facebook
						</a>
						<a href="#" className="social-item bg-twitter">
							<i className="fab fa-twitter" aria-hidden="true"></i>
							Twitter
						</a>
						<a href="#" className="social-item bg-dribbble">
							<i className="fab fa-dribbble" aria-hidden="true"></i>
							Dribbble
						</a>
					</div>
					
					
					{/*end socials*/}
				</div>
			</div>
		
            
  );
}

export default Info;