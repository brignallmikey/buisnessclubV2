import React, { Fragment } from "react";

const PhotoItem = ({ img, link }) => {
  return (
    <Fragment>
      <li>
        <a href={link}>
          <img src={img} alt='photo' />
        </a>
      </li>
    </Fragment>
  );
};

export default PhotoItem;
