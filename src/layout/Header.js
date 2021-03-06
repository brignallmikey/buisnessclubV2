import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import HeaderIn from "../components/misc/HeaderIn";
import HeaderOut from "../components/misc/HeaderOut";

import profilePic from "../assets/images/profile.jpg";
import { IoMdHappy, IoIosLogOut } from "react-icons/io";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import {
  FaEllipsisH,
  FaRegCommentDots,
  FaHeart,
  FaStar,
  FaCheck
} from "react-icons/fa";
import { MdDelete, MdLocalPostOffice, MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const signedIn = true;

const ProfileIn = () => {
  if (signedIn === true) {
    return <HeaderIn />;
  } else {
    return null;
  }
};

const ProfileOut = () => {
  if (signedIn === false) {
    return <HeaderOut />;
  } else {
    return null;
  }
};

function Header() {
  return (
    <div>
      <header className="header" id="site-header">
        <div className="page-title">
          <h6>Profile</h6>
        </div>

        <div className="header-content-wrapper">
          <div className="control-block">
            <div className="control-icon more has-items">
              <IoMdHappy />
            </div>

            <div className="more-dropdown more-with-triangle triangle-top-center">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
                <a href="#">Find Friends</a>
                <a href="#">Settings</a>
              </div>

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img src={profilePic} alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Tamara Romanoff
                      </a>
                      <span className="chat-message-item">
                        Mutual Friend: Sarah Hetfield
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <IoMdHappy />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <IoMdHappy />
                        </span>
                      </a>
                    </span>

                    <div className="more">
                      <FaEllipsisH />
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src={profilePic} alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Tony Stevens
                      </a>
                      <span className="chat-message-item">
                        4 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <IoMdHappy />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <IoMdHappy />
                        </span>
                      </a>
                    </span>

                    <div className="more">
                      <FaEllipsisH />
                    </div>
                  </li>

                  <li className="accepted">
                    <div className="author-thumb">
                      <img src={profilePic} alt="author" />
                    </div>
                    <div className="notification-event">
                      You and{" "}
                      <a href="#" className="h6 notification-friend">
                        Mary Jane Stark
                      </a>{" "}
                      just became friends. Write on{" "}
                      <a href="#" className="notification-link">
                        her wall
                      </a>
                      .
                    </div>
                    <span className="notification-icon">
                      <IoMdHappy />
                    </span>

                    <div className="more">
                      <FaEllipsisH />
                      <MdDelete />
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src={profilePic} alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">
                        Stagg Clothing
                      </a>
                      <span className="chat-message-item">
                        9 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <IoMdHappy />
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <IoMdHappy />
                        </span>
                      </a>
                    </span>

                    <div className="more">
                      <FaEllipsisH />
                    </div>
                  </li>
                </ul>
              </div>

              <a href="#" className="view-all bg-blue">
                Check all your Events
              </a>
            </div>
          </div>

          <div className="icons">
            <div className="control-icon more has-items">
              <FaRegCommentDots />
              <div className="label-avatar bg-purple">2</div>

              <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="notification-list chat-message">
                    <li className="message-unread">
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">
                          Diana Jameson
                        </a>
                        <span className="chat-message-item">
                          Hi James! It’s Diana, I just wanted to let you know
                          that we have to reschedule...
                        </span>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            4 hours ago
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <FaRegCommentDots />
                      </span>
                      <div className="more">
                        <FaRegCommentDots />
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">
                          Jake Parker
                        </a>
                        <span className="chat-message-item">
                          Great, I’ll see you tomorrow!.
                        </span>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            4 hours ago
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <FaRegCommentDots />
                      </span>

                      <div className="more">
                        <FaEllipsisH />
                      </div>
                    </li>
                    <li>
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">
                          Elaine Dreyfuss
                        </a>
                        <span className="chat-message-item">
                          We’ll have to check that at the office and see if the
                          client is on board with...
                        </span>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            Yesterday at 9:56pm
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <FaRegCommentDots />
                      </span>
                      <div className="more">
                        <FaEllipsisH />
                      </div>
                    </li>

                    <li className="chat-group">
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                        <img src={profilePic} alt="author" />
                        <img src={profilePic} alt="author" />
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <a href="#" className="h6 notification-friend">
                          You, Faye, Ed &amp; Jet +3
                        </a>
                        <span className="last-message-author">Ed:</span>
                        <span className="chat-message-item">
                          Yeah! Seems fine by me!
                        </span>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            March 16th at 10:23am
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <FaRegCommentDots />
                      </span>
                      <div className="more">
                        <FaEllipsisH />
                      </div>
                    </li>
                  </ul>
                </div>

                <a href="#" className="view-all bg-purple">
                  View All Messages
                </a>
              </div>
            </div>

            <div className="control-icon more has-items">
              <AiTwotoneThunderbolt />

              <div className="label-avatar bg-primary">8</div>

              <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                  <ul className="notification-list">
                    <li>
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>
                          <a href="#" className="h6 notification-friend">
                            Mathilda Brinker
                          </a>{" "}
                          commented on your new{" "}
                          <a href="#" className="notification-link">
                            profile status
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            4 hours ago
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <MdLocalPostOffice />
                      </span>

                      <div className="more">
                        <FaEllipsisH />
                        <MdDelete />
                      </div>
                    </li>

                    <li className="un-read">
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>
                          You and{" "}
                          <a href="#" className="h6 notification-friend">
                            Nicholas Grissom
                          </a>{" "}
                          just became friends. Write on{" "}
                          <a href="#" className="notification-link">
                            his wall
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            9 hours ago
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <IoMdHappy />
                      </span>

                      <div className="more">
                        <FaEllipsisH />
                        <MdDelete />
                      </div>
                    </li>

                    <li className="with-comment-photo">
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>
                          <a href="#" className="h6 notification-friend">
                            Sarah Hetfield
                          </a>{" "}
                          commented on your{" "}
                          <a href="#" className="notification-link">
                            photo
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            Yesterday at 5:32am
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <MdLocalPostOffice />
                      </span>

                      <div className="comment-photo">
                        <img src="img/comment-photo1.jpg" alt="photo" />
                        <span>
                          “She looks incredible in that outfit! We should see
                          each...”
                        </span>
                      </div>

                      <div className="more">
                        <FaEllipsisH />
                        <MdDelete />
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>
                          <a href="#" className="h6 notification-friend">
                            Green Goo Rock
                          </a>{" "}
                          invited you to attend to his event Goo in{" "}
                          <a href="#" className="notification-link">
                            Gotham Bar
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            March 5th at 6:43pm
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <IoMdHappy />
                      </span>

                      <div className="more">
                        <FaEllipsisH />
                        <MdDelete />
                      </div>
                    </li>

                    <li>
                      <div className="author-thumb">
                        <img src={profilePic} alt="author" />
                      </div>
                      <div className="notification-event">
                        <div>
                          <a href="#" className="h6 notification-friend">
                            James Summers
                          </a>{" "}
                          commented on your new{" "}
                          <a href="#" className="notification-link">
                            profile status
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            datetime="2004-07-24T18:18"
                          >
                            March 2nd at 8:29pm
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        <FaHeart />
                      </span>

                      <div className="more">
                        <FaEllipsisH />
                        <MdDelete />
                      </div>
                    </li>
                  </ul>
                </div>

                <a href="#" className="view-all bg-primary">
                  View All Notifications
                </a>
              </div>
            </div>

            <ProfileIn />
          </div>

          <ProfileOut />
        </div>
      </header>

      <header className="header header-responsive" id="site-header-responsive">
        <div className="header-content-wrapper">
          <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#request"
                role="tab"
              >
                <div className="control-icon has-items">
                  <IoMdHappy />
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                <div className="control-icon has-items">
                  <FaRegCommentDots />
                  <div className="label-avatar bg-purple">2</div>
                </div>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#notification"
                role="tab"
              >
                <div className="control-icon has-items">
                  <AiTwotoneThunderbolt />
                  <div className="label-avatar bg-primary">8</div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Tab panes */}
        <div className="tab-content tab-content-responsive">
          <div className="tab-pane " id="request" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">FRIEND REQUESTS</h6>
                <a href="#">Find Friends</a>
                <a href="#">Settings</a>
              </div>
              <ul className="notification-list friend-requests">
                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">
                      Tamara Romanoff
                    </a>
                    <span className="chat-message-item">
                      Mutual Friend: Sarah Hetfield
                    </span>
                  </div>
                  <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <IoMdHappy />
                      </span>
                    </a>

                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <IoMdHappy />
                      </span>
                    </a>
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">
                      Tony Stevens
                    </a>
                    <span className="chat-message-item">
                      4 Friends in Common
                    </span>
                  </div>
                  <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <IoMdHappy />
                      </span>
                    </a>

                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <IoMdHappy />
                      </span>
                    </a>
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                  </div>
                </li>
                <li className="accepted">
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    You and{" "}
                    <a href="#" className="h6 notification-friend">
                      Mary Jane Stark
                    </a>{" "}
                    just became friends. Write on{" "}
                    <a href="#" className="notification-link">
                      her wall
                    </a>
                    .
                  </div>
                  <span className="notification-icon">
                    <IoMdHappy />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>
                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">
                      Stagg Clothing
                    </a>
                    <span className="chat-message-item">
                      9 Friends in Common
                    </span>
                  </div>
                  <span className="notification-icon">
                    <a href="#" className="accept-request">
                      <span className="icon-add without-text">
                        <IoMdHappy />
                      </span>
                    </a>

                    <a href="#" className="accept-request request-del">
                      <span className="icon-minus">
                        <IoMdHappy />
                      </span>
                    </a>
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                  </div>
                </li>
              </ul>
              <a href="#" className="view-all bg-blue">
                Check all your Events
              </a>
            </div>
          </div>

          <div className="tab-pane " id="chat" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Chat / Messages</h6>
                <a href="#">Mark all as read</a>
                <a href="#">Settings</a>
              </div>

              <ul className="notification-list chat-message">
                <li className="message-unread">
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">
                      Diana Jameson
                    </a>
                    <span className="chat-message-item">
                      Hi James! It’s Diana, I just wanted to let you know that
                      we have to reschedule...
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <FaRegCommentDots />
                  </span>
                  <div className="more">
                    <FaEllipsisH />
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <a href="#" className="h6 notification-friend">
                      Jake Parker
                    </a>
                    <span className="chat-message-item">
                      Great, I’ll see you tomorrow!.
                    </span>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <FaRegCommentDots />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                  </div>
                </li>
              </ul>

              <a href="#" className="view-all bg-purple">
                View All Messages
              </a>
            </div>
          </div>

          <div className="tab-pane " id="notification" role="tabpanel">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Notifications</h6>
                <a href="#">Mark all as read</a>
                <a href="#">Settings</a>
              </div>

              <ul className="notification-list">
                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#" className="h6 notification-friend">
                        Mathilda Brinker
                      </a>{" "}
                      commented on your new{" "}
                      <a href="#" className="notification-link">
                        profile status
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        4 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <MdLocalPostOffice />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>

                <li className="un-read">
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      You and{" "}
                      <a href="#" className="h6 notification-friend">
                        Nicholas Grissom
                      </a>{" "}
                      just became friends. Write on{" "}
                      <a href="#" className="notification-link">
                        his wall
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        9 hours ago
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <IoMdHappy />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>

                <li className="with-comment-photo">
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#" className="h6 notification-friend">
                        Sarah Hetfield
                      </a>{" "}
                      commented on your{" "}
                      <a href="#" className="notification-link">
                        photo
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        Yesterday at 5:32am
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <MdLocalPostOffice />
                  </span>

                  <div className="comment-photo">
                    <img src="img/comment-photo1.jpg" alt="photo" />
                    <span>
                      “She looks incredible in that outfit! We should see
                      each...”
                    </span>
                  </div>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#" className="h6 notification-friend">
                        Green Goo Rock
                      </a>{" "}
                      invited you to attend to his event Goo in{" "}
                      <a href="#" className="notification-link">
                        Gotham Bar
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        March 5th at 6:43pm
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <IoMdHappy />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>

                <li>
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="notification-event">
                    <div>
                      <a href="#" className="h6 notification-friend">
                        James Summers
                      </a>{" "}
                      commented on your new{" "}
                      <a href="#" className="notification-link">
                        profile status
                      </a>
                      .
                    </div>
                    <span className="notification-date">
                      <time
                        className="entry-date updated"
                        datetime="2004-07-24T18:18"
                      >
                        March 2nd at 8:29pm
                      </time>
                    </span>
                  </div>
                  <span className="notification-icon">
                    <FaHeart />
                  </span>

                  <div className="more">
                    <FaEllipsisH />
                    <MdDelete />
                  </div>
                </li>
              </ul>

              <a href="#" className="view-all bg-primary">
                View All Notifications
              </a>
            </div>
          </div>

          <div className="tab-pane " id="search" role="tabpanel">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                {/*<input className="form-control js-user-search" placeholder="Search here people or pages..." type="text"/>*/}
              </div>
            </form>
          </div>
        </div>
        {/* end  Tab panes */}
      </header>

      {/* end Responsive Header-BP */}
      <div className="header-spacer"></div>
    </div>
  );
}

export default Header;
