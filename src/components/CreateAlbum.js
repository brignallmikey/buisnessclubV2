import React from 'react';



function CreateAlbum() {
  return (    
	  
    <div className="photo-album-item-wrap col-4-width" >
							
							<div className="photo-album-item create-album" data-mh="album-item">
								
							
								<a href="#" data-toggle="modal" data-target="#create-photo-album" className="full-block"></a>
							
								<div className="content">
							
									<a href="#" className="btn btn-control bg-primary" data-toggle="modal" data-target="#create-photo-album">
										{/*<svg className="olymp-plus-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>*/}
									</a>
							
									<a href="#" className="title h5" data-toggle="modal" data-target="#create-photo-album">Create an Album</a>
									<span className="sub-title">It only takes a few minutes!</span>
							
								</div>
							
							</div>
						</div>
    
		
            
  );
}

export default CreateAlbum;