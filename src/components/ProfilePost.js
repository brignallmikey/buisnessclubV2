import React from 'react';


function ProfilePost() {
  return (    
    <div>
	
	<div className="ui-block">
					{/*post*/}
					
					<article className="hentry post">
					
							<div className="post__author author vcard inline-items">
								<img src="img/author-page.jpg" alt="author"/>
					
								<div className="author-date">
									<a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
									<div className="post__date">
										<time className="published" datetime="2017-03-24T18:18">
											19 hours ago
										</time>
									</div>
								</div>
					
								<div className="more">
									{/*<svg className="olymp-three-dots-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
  </svg>*/}
									<ul className="more-dropdown">
										<li>
											<a href="#">Edit Post</a>
										</li>
										<li>
											<a href="#">Delete Post</a>
										</li>
										<li>
											<a href="#">Turn Off Notifications</a>
										</li>
										<li>
											<a href="#">Select as Featured</a>
										</li>
									</ul>
								</div>
					
							</div>
					
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque.
							</p>
					
							<div className="post-additional-info inline-items">
					
								<a href="#" className="post-add-icon inline-items">
									{/*<svg className="olymp-heart-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
</svg>*/}
									<span>8</span>
								</a>
					
								<ul className="friends-harmonic">
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
											<img src="img/friend-harmonic9.jpg" alt="friend"/>
										</a>
									</li>
									<li>
										<a href="#">
											<img src="img/friend-harmonic10.jpg" alt="friend"/>
										</a>
									</li>
									<li>
										<a href="#">
											<img src="img/friend-harmonic11.jpg" alt="friend"/>
										</a>
									</li>
								</ul>
					
								<div className="names-people-likes">
									<a href="#">Jenny</a>, <a href="#">Robert</a> and
									<br/>6 more liked this
								</div>
					
					
								<div className="comments-shared">
									<a href="#" className="post-add-icon inline-items">
										{/*<svg className="olymp-speech-balloon-icon">
											<use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
</svg>*/}
										<span>17</span>
									</a>
					
									<a href="#" className="post-add-icon inline-items">
										{/*<svg className="olymp-share-icon">
											<use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
</svg>*/}
										<span>24</span>
									</a>
								</div>
					
					
							</div>
					
							<div className="control-block-button post-control-button">
					
								<a href="#" className="btn btn-control featured-post">
									{/*<svg className="olymp-trophy-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
</svg>*/}
								</a>
					
								<a href="#" className="btn btn-control">
									{/*<svg className="olymp-like-post-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
</svg>*/}
								</a>
					
								<a href="#" className="btn btn-control">
									{/*<svg className="olymp-comments-post-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
</svg>*/}
								</a>
					
								<a href="#" className="btn btn-control">
									{/*<svg className="olymp-share-icon">
										<use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
</svg>*/}
								</a>
					
							</div>
					
						</article>
					
					{/*end post*/}				
					</div>
					</div>
  );
}

export default ProfilePost;