import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/pier.jpg";
import profilePic from "../../assets/images/profile.jpg";
import { MdSettings } from "react-icons/md";
import { FaRegCommentDots, FaEllipsisH } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

function ProfileHeader(props) {
  console.log("props", props);
  return (
    <div className="page-has-left-panels page-has-right-panels">
      {/*HeaderProfile*/}

      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="top-header">
                <div className="top-header-thumb">
                  <img src={banner} alt="nature" />
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <Link
                            to="/profile"
                            /*className={
                              
                              props.location.pathname === "/profile"
                                ? "active"
                                : ""
                            
                            }*/
                            onClick={() => console.log("Timeline")}
                          >
                            Timeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile/about"
                            /*className={
                              props.location.pathname === "/profile/about"
                                ? "active"
                                : ""
                            }*/
                            onClick={() => console.log("About")}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile/friends"
                            /* className={
                              props.location.pathname === "/profile/friends"
                                ? "active"
                                : ""
                            }*/
                            onClick={() => console.log("Friends")}
                          >
                            Friends
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <Link
                            to="/profile/photos"
                            /* className={
                              props.location.pathname === "/profile/photos"
                                ? "active"
                                : ""
                            }*/
                            onClick={() => console.log("Photos")}
                          >
                            Photos
                          </Link>
                        </li>
                        <li>
                          <div className="more">
                            <FaEllipsisH />
                            <ul className="more-dropdown more-with-triangle">
                              <li>
                                <a href="#">Report Profile</a>
                              </li>
                              <li>
                                <a href="#">Block Profile</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="control-block-button">
                    <a
                      href="35-YourAccount-FriendsRequests.html"
                      className="btn btn-control bg-blue"
                    >
                      <IoMdHappy />
                    </a>

                    <a href="/" className="btn btn-control bg-purple">
                      <FaRegCommentDots />
                    </a>

                    <div className="btn btn-control bg-primary more">
                      <MdSettings />

                      <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#update-header-photo"
                          >
                            Update Profile Photo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#update-header-photo"
                          >
                            Update Header Photo
                          </a>
                        </li>
                        <li>
                          <a href="29-YourAccount-AccountSettings.html">
                            Account Settings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="top-header-author">
                  <a href="02-ProfilePage.html" className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </a>
                  <div className="author-content">
                    <a href="02-ProfilePage.html" className="h4 author-name">
                      James Spiegel
                    </a>
                    <div className="country">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
