import React from "react";


function Notifications() {
  return (
      <div>
    <div className="ui-block">
    <div className="ui-block-title">
        <h6 className="title">Notifications</h6>
        <a href="#" className="more">{/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}</a>
    </div>

    
    
    
    <ul className="notification-list">
        <li>
            <div className="author-thumb">
                <img src="img/avatar1-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">4 hours ago</time></span>
            </div>
            <span className="notification-icon">
                                    {/*<svg className="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>*/}
                                </span>
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li className="un-read">
            <div className="author-thumb">
                <img src="img/avatar2-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">9 hours ago</time></span>
            </div>
            <span className="notification-icon">
                                    {/*<svg className="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>*/}
                                </span>
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li className="with-comment-photo">
            <div className="author-thumb">
                <img src="img/avatar3-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
            </div>
            <span className="notification-icon">
                                   {/*} <svg className="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>*/}
                                </span>
    
            <div className="comment-photo">
                <img src="img/comment-photo.jpg" alt="photo"/>
                <span>“She looks incredible in that outfit! We should see each...”</span>
            </div>
            <div className="more">
               {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar4-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Chris Greyson</a> liked your <a href="#" className="notification-link">profile status</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">March 18th at 8:22pm</time></span>
            </div>
            <span className="notification-icon">
                                {/*<svg className="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>*/}
                            </span>
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar5-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
            </div>
            <span className="notification-icon">
                                   {/*} <svg className="olymp-calendar-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>*/}
                                </span>
    
            <div className="more">
               {/*} <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar6-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
            </div>
            <span className="notification-icon">
                                   {/* <svg className="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>*/}
                                </span>
    
            <div className="more">
                {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    
        <li>
            <div className="author-thumb">
                <img src="img/avatar7-sm.jpg" alt="author"/>
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">Marina Valentine</a> commented on your new <a href="#" className="notification-link">profile status</a>.
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">March 2nd at 10:07am</time></span>
            </div>
            <span className="notification-icon">
                                   {/* <svg className="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>*/}
                                </span>
    
            <div className="more">
               {/* <svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg className="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>*/}
            </div>
        </li>
    </ul>
    
    

</div>




<nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
        <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1<div className="ripple-container"><div className="ripple ripple-on ripple-out" style={{left: "-10.3833px; top: -16.8333px; background-color: rgb(255, 255, 255); transform: scale(16.7857);"}}></div></div></a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">12</a></li>
        <li className="page-item">
            <a className="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>
</div>



    
  );
}

export default Notifications;
