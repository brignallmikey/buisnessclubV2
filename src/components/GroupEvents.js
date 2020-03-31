import React from "react";
import GroupPageLayout from "../layout/GroupPageLayout";
import Events from "./Events";

function GroupEvents() {
  return (
    <GroupPageLayout>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <div className="h6 title">Green Goo’s Events</div>
                <a href="#" className="more">
                  {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">UPCOMING EVENTS 2016</h6>
              </div>

              <table className="event-item-table">
                <Events />
              </table>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">PAST EVENTS</h6>
              </div>

              <div className="no-past-events">
                {/*<svg className="olymp-month-calendar-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-month-calendar-icon"></use></svg>*/}
                <span>
                  There are no past events <br />
                  to show
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GroupPageLayout>
  );
}
export default GroupEvents;
