import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

function HeaderIn() {
  return (
    <div className="author-page author vcard inline-items more">
      <div className="author-thumb">
        <img
          alt="author"
          src={profilePic}
          className="avatar"
          style={{ width: "28px" }}
        />
        <span className="icon-status online"></span>
        <div className="more-dropdown more-with-triangle">
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">Your Account</h6>
            </div>

            <ul className="account-settings">
              <li>
                <a href="29-YourAccount-AccountSettings.html">
                  <GiHamburgerMenu />

                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a href="36-FavPage-SettingsAndCreatePopup.html">
                  <FaStar />

                  <span>Create Fav Page</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <IoIosLogOut />

                  <span>Log Out</span>
                </a>
              </li>
            </ul>

            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">About Club</h6>
            </div>

            <ul>
              <li>
                <a href="#">
                  <span>Terms and Conditions</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Jobs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="author-title">
        <Router>
          <Link to="/profile" onClick={() => console.log("Timeline")}>
            James Speigel
          </Link>
        </Router>
        <MdArrowDropDown />
      </div>
      <span className="author-subtitle">SPACE COWBOY</span>
    </div>
  );
}

export default HeaderIn;
