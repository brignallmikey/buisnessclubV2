import React from "react";
import banner from "../assets/images/pier.jpg";
import GroupPageLayout from "../layout/GroupPageLayout";

function GroupPhotos() {
  return (
    <GroupPageLayout>
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Last Photos</h6>
        </div>
        <div className="ui-block-content">
          {/*latest photos*/}

          <ul className="widget w-last-photo js-zoom-gallery">
            <li>
              <a href="img/last-photo10-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot11-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot12-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot13-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot14-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot15-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot16-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot17-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
            <li>
              <a href="img/last-phot18-large.jpg">
                <img src={banner} alt="photo" />
              </a>
            </li>
          </ul>

          {/*end photos*/}
        </div>
      </div>
    </GroupPageLayout>
  );
}
export default GroupPhotos;
