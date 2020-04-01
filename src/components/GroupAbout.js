import React from "react";
import GroupPageLayout from "../layout/GroupPageLayout";
import FriendCard from "../components/FriendCard";
import Info from "../components/Information";

function GroupAbout(props) {
  return (
    <GroupPageLayout location={props.location}>
      <div className="container">
        <div className="row">
          <div className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">Green Goo’s Favers (5630)</div>
                <form className="w-search">
                  <div className="form-group with-button">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search Friends..."
                    />
                    <button>
                      {/*<svg className="olymp-magnifying-glass-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>*/}
                    </button>
                  </div>
                </form>
                <a href="#" className="more">
                  {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
                </a>
              </div>
            </div>
            <div class="row">
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </div>
          </div>

          <div className="col col-xl-3 order-xl-1 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
            <Info />
          </div>
        </div>
      </div>
    </GroupPageLayout>
  );
}
export default GroupAbout;
