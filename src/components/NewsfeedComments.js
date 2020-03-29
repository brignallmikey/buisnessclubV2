import React from "react";

function NewsfeedComments() {
  return (
    <div>
      <ul className="comments-list">
        <li className="comment-item">
          <div className="post__author author vcard inline-items">
            <img src="img/author-page.jpg" alt="author" />

            <div className="author-date">
              <a className="h6 post__author-name fn" href="02-ProfilePage.html">
                James Spiegel
              </a>
              <div className="post__date">
                <time className="published" datetime="2004-07-24T18:18">
                  38 mins ago
                </time>
              </div>
            </div>

            <a href="#" className="more">
              {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
            </a>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium der doloremque laudantium.
          </p>

          <a href="#" className="post-add-icon inline-items">
            {/*<svg className="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>*/}
            <span>3</span>
          </a>
          <a href="#" className="reply">
            Reply
          </a>
        </li>
        <li className="comment-item">
          <div className="post__author author vcard inline-items">
            <img src="img/avatar1-sm.jpg" alt="author" />

            <div className="author-date">
              <a className="h6 post__author-name fn" href="#">
                Mathilda Brinker
              </a>
              <div className="post__date">
                <time className="published" datetime="2004-07-24T18:18">
                  1 hour ago
                </time>
              </div>
            </div>

            <a href="#" className="more">
              {/*<svg className="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>*/}
            </a>
          </div>

          <p>
            Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est,
            quinder dolorem ipsum quia dolor sit amet, consectetur adipisci
            velit en lorem ipsum duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum.
          </p>

          <a href="#" className="post-add-icon inline-items">
            {/*<svg className="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>*/}
            <span>8</span>
          </a>
          <a href="#" className="reply">
            Reply
          </a>
        </li>
      </ul>

      <a href="#" className="more-comments">
        View more comments <span>+</span>
      </a>

      {/*} Comment Form */}

      <form className="comment-form inline-items">
        <div className="post__author author vcard inline-items">
          <img src="img/author-page.jpg" alt="author" />

          <div className="form-group with-icon-right ">
            <textarea className="form-control" placeholder=""></textarea>
            <div className="add-options-message">
              <a
                href="#"
                className="options-message"
                data-toggle="modal"
                data-target="#update-header-photo"
              >
                {/*<svg className="olymp-camera-icon">
											<use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
  </svg>*/}
              </a>
            </div>
          </div>
        </div>

        <button className="btn btn-md-2 btn-primary">Post Comment</button>

        <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewsfeedComments;
