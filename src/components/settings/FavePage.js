import React from "react";


function FavePage() {
  return (
      <div>
    <div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Favorite Page Information</h6>
				</div>
				<div className="ui-block-content">

					
					
					
					<form>
						<div className="row">
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="form-group label-floating">
									<label className="control-label">First Name</label>
									<input className="form-control" placeholder="" type="text" value="Green Goo"/>
								</div>
					
								<div className="form-group label-floating">
									<label className="control-label">Your Email</label>
									<input className="form-control" placeholder="" type="email" value="greengoo_gigs@yourmail.com"/>
								</div>
					
								<div className="form-group date-time-picker label-floating">
									<label className="control-label">Since</label>
									<input name="datetimepicker" value="10/24/1984" />
									<span className="input-group-addon">
															{/*<svg className="olymp-calendar-icon icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>*/}														</span>
								</div>
							</div>
					
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="form-group label-floating">
									<label className="control-label">Last Name</label>
									<input className="form-control" placeholder="" type="text" value="Rock"/>
								</div>
					
								<div className="form-group label-floating">
									<label className="control-label">Your Website</label>
									<input className="form-control" placeholder="" type="email" value="www.ggrock.com"/>
								</div>
					
					
								<div className="form-group label-floating">
									<label className="control-label">Your Phone Number</label>
									<input className="form-control" placeholder="" type="text"/>
								</div>
							</div>
					
							<div className="col col-lg-4 col-md-4 col-sm-12 col-12">
								<div className="form-group label-floating is-select">
									<label className="control-label">Your Country</label>
									<select className="selectpicker form-control">
										<option value="US">United States</option>
										<option value="AU">Australia</option>
									</select>
								</div>
							</div>
							<div className="col col-lg-4 col-md-4 col-sm-12 col-12">
								<div className="form-group label-floating is-select">
									<label className="control-label">Your State / Province</label>
									<select className="selectpicker form-control">
										<option value="CA">California</option>
										<option value="TE">Texas</option>
									</select>
								</div>
							</div>
							<div className="col col-lg-4 col-md-4 col-sm-12 col-12">
								<div className="form-group label-floating is-select">
									<label className="control-label">Your City</label>
									<select className="selectpicker form-control">
										<option value="SF">San Francisco</option>
										<option value="NY">New York</option>
									</select>
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="form-group">
									<textarea className="form-control" placeholder="Write a little description about the page">We are Rock Band from Los Angeles, now based in San Francisco, come and listen to us play!</textarea>
								</div>
							</div>
					
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
					
								<div className="form-group label-floating is-empty">
									<label className="control-label">Based In</label>
									<input className="form-control" placeholder="" type="text"/>
								</div>
					
								<div className="form-group label-floating is-select">
									<label className="control-label">Category</label>
									<select className="selectpicker form-control">
										<option value="MA">Rock Band</option>
										<option value="FE">Pop Band</option>
										<option value="FE">Jazz Band</option>
									</select>
								</div>
							</div>
					
							<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div className="form-group">
									<textarea className="form-control" placeholder="Additional Info">We are open for gigs all over the country. If you are interested, please contact us via our website or send us an email to gigs@ggrock.com</textarea>
								</div>
							</div>
					
							<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div className="form-group with-icon label-floating">
									<label className="control-label">Your Facebook Account</label>
									<input className="form-control" type="text" value="www.facebook.com/greengoo_rock"/>
									<i className="fab fa-facebook-f c-facebook" aria-hidden="true"></i>
								</div>
								<div className="form-group with-icon label-floating">
									<label className="control-label">Your Twitter Account</label>
									<input className="form-control" type="text" value="www.twitter.com/greengoo_rock"/>
									<i className="fab fa-twitter c-twitter" aria-hidden="true"></i>
								</div>
								<div className="form-group with-icon label-floating is-empty">
									<label className="control-label">Your RSS Feed Account</label>
									<input className="form-control" type="text"/>
									<i className="fa fa-rss c-rss" aria-hidden="true"></i>
								</div>
								<div className="form-group with-icon label-floating is-empty">
									<label className="control-label">Your Dribbble Account</label>
									<input className="form-control" type="text" value=""/>
									<i className="fab fa-dribbble c-dribbble" aria-hidden="true"></i>
								</div>
								<div className="form-group with-icon label-floating">
									<label className="control-label">Your Spotify Account</label>
									<input className="form-control" type="text" value="green_goo@spotify.com"/>
									<i className="fab fa-spotify c-spotify" aria-hidden="true"></i>
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-secondary btn-lg full-width">Restore all Attributes</a>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-primary btn-lg full-width">Save all Changes</a>
							</div>
						</div>
					</form>
					
					{/*end fave page info */}
					

				</div>
			</div>

			<div className="ui-block">
				<div className="ui-block-title">
					<h6 className="title">Favourite Page Settings</h6>
				</div>
				<div className="ui-block-content">

					
					{/*fave page settings*/}
					
					<form>
						<div className="row">
					
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="form-group label-floating is-select">
									<label className="control-label">Who Can Friend You?</label>
									<select className="selectpicker form-control">
										<option value="EO">Everyone</option>
										<option value="NO">No One</option>
									</select>
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="form-group label-floating is-select">
									<label className="control-label">Who Can View Your Posts</label>
									<select className="selectpicker form-control">
										<option value="US">Friends Only</option>
										<option value="EO">Everyone</option>
									</select>
								</div>
							</div>
					
							<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div className="description-toggle">
									<div className="description-toggle-content">
										<div className="h6">Notifications Sound</div>
										<p>A sound will be played each time you receive a new activity notification</p>
									</div>
					
									<div className="togglebutton">
										<label>
											<input type="checkbox" checked=""/>
										</label>
									</div>
								</div>
								<div className="description-toggle">
									<div className="description-toggle-content">
										<div className="h6">Notifications Email</div>
										<p>We’ll send you an email to your account each time you receive a new activity notification</p>
									</div>
					
									<div className="togglebutton">
										<label>
											<input type="checkbox" checked=""/>
										</label>
									</div>
								</div>
								<div className="description-toggle">
									<div className="description-toggle-content">
										<div className="h6">Friend’s Birthdays</div>
										<p>Choose wheather or not receive notifications about your friend’s birthdays on your newsfeed</p>
									</div>
					
									<div className="togglebutton">
										<label>
											<input type="checkbox" checked=""/>
										</label>
									</div>
								</div>
								<div className="description-toggle">
									<div className="description-toggle-content">
										<div className="h6">Chat Message Sound</div>
										<p>A sound will be played each time you receive a new message on an inactive chat window</p>
									</div>
					
									<div className="togglebutton">
										<label>
											<input type="checkbox" checked=""/>
										</label>
									</div>
								</div>
							</div>
					
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-secondary btn-lg full-width">Restore all Attributes</a>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-primary btn-lg full-width">Save all Changes</a>
							</div>
						</div>
					</form>
					
					
				</div>
			</div>
            </div>


    
  );
}

export default FavePage;
