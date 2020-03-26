import React from 'react';



function FriendCard() {
  return (    
    <div className="ui-block">
				
    
    
    <div className="friend-item">
        <div className="friend-header-thumb">
            <img src="img/friend1.jpg" alt="friend"/>
        </div>
    
        <div className="friend-item-content">
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
                <ul className="more-dropdown">
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
            <div className="friend-avatar">
                <div className="author-thumb">
                    <img src="img/avatar1.jpg" alt="author"/>
                </div>
                <div className="author-content">
                    <a href="#" className="h5 author-name">Nicholas Grissom</a>
                    <div className="country">San Francisco, CA</div>
                </div>
            </div>
    
            <div className="swiper-container" data-slide="fade">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="friend-count" data-swiper-parallax="-500">
                            <a href="#" className="friend-count-item">
                                <div className="h6">52</div>
                                <div className="title">Friends</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">240</div>
                                <div className="title">Photos</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">16</div>
                                <div className="title">Videos</div>
                            </a>
                        </div>
                        <div className="control-block-button" data-swiper-parallax="-100">
                            <a href="#" className="btn btn-control bg-blue">
                                {/*<svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                            </a>
    
                            <a href="#" className="btn btn-control bg-purple">
                                {/*<svg className="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>*/}
                            </a>
    
                        </div>
                    </div>
    
                    <div className="swiper-slide">
                        <p className="friend-about" data-swiper-parallax="-500">
                            Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>
    
                        <div className="friend-since" data-swiper-parallax="-100">
                            <span>Friends Since:</span>
                            <div className="h6">December 2014</div>
                        </div>
                    </div>
                </div>
    
                {/*If we need pagination */}
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
    
   			</div>
    
		
            
  );
}

export default FriendCard;