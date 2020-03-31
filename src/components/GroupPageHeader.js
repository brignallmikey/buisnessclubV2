import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/pier.jpg";
import profilePic from "../assets/images/profile.jpg";
import { MdSettings } from "react-icons/md";
import { FaRegCommentDots, FaEllipsisH } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

function GroupPageHeader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block">
            <div className="top-header top-header-favorit">
              <div className="top-header-thumb">
                <img src={banner} alt="nature" />
                <div className="top-header-author">
                  <div className="author-thumb">
                    <img src={profilePic} alt="author" />
                  </div>
                  <div className="author-content">
                    <a href="#" className="h3 author-name">
                      Green Goo Rock
                    </a>
                    <div className="country">Rock Band | San Francisco, CA</div>
                  </div>
                </div>
              </div>
              <div className="profile-section">
                <div className="row">
                  <div className="col col-xl-8 m-auto col-lg-8 col-md-12">
                    <ul className="profile-menu">
                      <li>
                        <Link
                          to="/grouppage"
                          className="active"
                          onClick={() => console.log("Timeline")}
                        >
                          Timeline
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/grouppage/about"
                          onClick={() => console.log("About")}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/grouppage/photos"
                          onClick={() => console.log("Photos")}
                        >
                          Photos
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/grouppage/events"
                          onClick={() => console.log("Events")}
                        >
                          Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="control-block-button">
                  <a href="#" className="btn btn-control bg-primary">
                    {/*<svg className="olymp-star-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>*/}
                  </a>

                  <a href="#" className="btn btn-control bg-purple">
                    {/*<svg className="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>*/}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPageHeader;
