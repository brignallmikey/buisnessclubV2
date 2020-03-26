import React from 'react';



function PhotoTile() {
  return (    
    
    <div className="photo-album-item-wrap col-4-width">
							
							
							<div className="photo-album-item" data-mh="album-item">
								<div className="photo-item">
									<img src="img/photo-item2.jpg" alt="photo"/>
									<div className="overlay overlay-dark"></div>
									<a href="#" className="more">{/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
									<a href="#" className="post-add-icon">
										{/*<svg className="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>*/}
										<span>324</span>
									</a>
									<a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
								</div>
							
								<div className="content">
									<a href="#" className="title h5">South America Vacations</a>
									<span className="sub-title">Last Added: 2 hours ago</span>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<ul className="friends-harmonic">
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
												</ul>
											</div>
							
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">24</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">86</div>
														<div className="title">Comments</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">16</div>
														<div className="title">Share</div>
													</a>
												</div>
											</div>
										</div>
							
										{/*if pagnation needed*/}
										<div className="swiper-pagination"></div>
									</div>
								</div>
							
							</div>
						</div>
    
		
            
  );
}

export default PhotoTile;