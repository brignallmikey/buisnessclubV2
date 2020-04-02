import React from "react";
import { MdPlusOne } from "react-icons/md";

function CreateAlbum() {
  return (
    <div className='photo-album-item-wrap col-4-width'>
      <div className='photo-album-item create-album'>
        <div className='content'>
          <a href='#' className='btn btn-control bg-primary'>
            <MdPlusOne />
          </a>

          <a href='#' className='title h5'>
            Create an Album
          </a>
          <span className='sub-title'>It only takes a few minutes!</span>
        </div>
      </div>
    </div>
  );
}

export default CreateAlbum;
