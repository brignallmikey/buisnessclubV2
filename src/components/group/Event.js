import React from "react";

function Event() {
  return (
    <tbody>
      <tr className="event-item">
        <td className="upcoming">
          <div className="date-event">
            {/*<svg className="olymp-small-calendar-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-small-calendar-icon"></use></svg>*/}

            <span className="day">28</span>
            <span className="month">may</span>
          </div>
        </td>
        <td className="author">
          <div className="event-author inline-items">
            <div className="author-thumb">
              <img src="img/avatar66-sm.jpg" alt="author" />
            </div>
            <div className="author-date">
              <a href="#" className="author-name h6">
                Green Goo in Gotham
              </a>
              <time className="published" datetime="2017-03-24T18:18">
                Saturday at 9:00pm
              </time>
            </div>
          </div>
        </td>
        <td className="location">
          <div className="place inline-items">
            {/*<svg className="olymp-add-a-place-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use></svg>*/}
            <span>Gotham Bar</span>
          </div>
        </td>
        <td className="description">
          <p className="description">
            We’ll be playing in the Gotham Bar in May. Come and have a great
            time with us! Entry: $12
          </p>
        </td>
        <td className="users">
          <ul className="friends-harmonic">
            <li>
              <a href="#">
                <img src="img/friend-harmonic5.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/friend-harmonic10.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/friend-harmonic7.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/friend-harmonic8.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/friend-harmonic2.jpg" alt="friend" />
              </a>
            </li>
            <li>
              <a href="#" className="all-users bg-breez">
                +24
              </a>
            </li>

            <li className="with-text">Will Assist</li>
          </ul>
        </td>
        <td className="add-event">
          <a
            href="20-CalendarAndEvents-MonthlyCalendar.html"
            className="btn btn-breez btn-sm"
          >
            Add to Calendar
          </a>
        </td>
      </tr>
    </tbody>
  );
}
export default Event;
