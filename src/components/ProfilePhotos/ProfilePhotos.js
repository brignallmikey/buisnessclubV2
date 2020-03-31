import React from "react";
import PhotoItem from "./PhotoItem";
import banner from "../../assets/images/pier.jpg";

const photos = [
  {
    id: 1,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 2,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 3,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 4,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 5,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 6,
    link: "img/last-photo10-large.jpg",
    img: banner
  },
  {
    id: 7,
    link: "img/last-photo10-large.jpg",
    img: banner
  }
];
function ProfilePhotos() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title'>
        <h6 className='title'>Last Photos</h6>
      </div>
      <div className='ui-block-content'>
        {/*latest photos*/}

        <ul className='widget w-last-photo js-zoom-gallery'>
          {photos.map(photo => (
            <PhotoItem key={photo.id} img={photo.img} link={photo.link} />
          ))}
        </ul>

        {/*end photos*/}
      </div>
    </div>
  );
}

export default ProfilePhotos;
