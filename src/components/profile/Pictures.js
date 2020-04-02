import React from "react";

import Profile from "../../layout/Profile";
import CreateAlbum from "./CreateAlbum";
import PhotoTile from "../misc/PhotoTile";

function ProfilePictures(props) {
  return (
    <Profile location={props.location}>
      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="ui-block responsive-flex">
          <div className="ui-block-title">
            <div className="h6 title">James’s Photo Gallery</div>

            <div className="block-btn align-right">
              <a
                href="#"
                data-toggle="modal"
                data-target="#create-photo-album"
                className="btn btn-primary btn-md-2"
              >
                Create Album +
              </a>

              <a
                href="#"
                data-toggle="modal"
                data-target="#update-header-photo"
                className="btn btn-md-2 btn-border-think custom-color c-grey"
              >
                Add Photos
              </a>
            </div>

            <ul className="nav nav-tabs photo-gallery" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#photo-page"
                  role="tab"
                >
                  {/*<svg className="olymp-photos-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>*/}
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#album-page"
                  role="tab"
                >
                  {/*<svg className="olymp-albums-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-albums-icon"></use></svg>*/}
                </a>
              </li>
            </ul>
            <a href="#" className="more">
              {/*(<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
            </a>
          </div>
        </div>
      </div>

      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        {/*tab panes*/}
        <div class="tab-content">
          <div class="tab-pane active" id="album-page" role="tabpanel">
            <div class="photo-album-wrapper">
              <CreateAlbum />
              <PhotoTile />
            </div>
          </div>
        </div>
      </div>
    </Profile>
  );
}
export default ProfilePictures;
