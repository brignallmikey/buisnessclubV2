import React from "react";


function FriendRequests() {
  return (
    <div className="ui-block">
    <div className="ui-block-title">
        <h6 className="title">Friend Requests</h6>
        <a href="#" className="more">{/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
    </div>

    
   
    
    <ul className="notification-list friend-requests">
        <li>
            <div className="author-thumb">
                <img src="img/avatar15-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
            </div>
            <span className="notification-icon">
                                <a href="#" className="accept-request">
                                    <span className="icon-add">
                                       {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}                                    </span>
                                    Accept Friend Request
                                </a>
    
                                <a href="#" className="accept-request request-del">
                                    <span className="icon-minus">
                                       {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                                    </span>
                                </a>
    
                            </span>
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar16-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Tony Stevens</a>
                <span className="chat-message-item">4 Friends in Common</span>
            </div>
            <span className="notification-icon">
                                <a href="#" className="accept-request">
                                    <span className="icon-add">
                                       {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                                    </span>
                                    Accept Friend Request
                                </a>
    
                                <a href="#" className="accept-request request-del">
                                    <span className="icon-minus">
                                       {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}                                    </span>
                                </a>
    
                            </span>
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li className="accepted">
            <div className="author-thumb">
                <img src="img/avatar17-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.
            </div>
            <span className="notification-icon">
                                {/*<svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                            </span>
    
            <div className="more">
               {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar18-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                <span className="chat-message-item">9 Friends in Common</span>
            </div>
            <span className="notification-icon">
                                <a href="#" className="accept-request">
                                    <span className="icon-add">
                                        {/*<svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}                                    </span>
                                    Accept Friend Request
                                </a>
    
                                <a href="#" className="accept-request request-del">
                                    <span className="icon-minus">
                                       {/* <svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                                    </span>
                                </a>
    
                            </span>
    
            <div className="more">
               {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
    </ul>
    
  
</div>



    
  );
}

export default FriendRequests;
