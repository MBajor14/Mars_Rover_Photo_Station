import React from 'react';

const Image = props => (
    <div className="col-md-3">
        <a href={props.img_src}>
            <img className="img-thumbnail" src={props.img_src} alt="Rover_IMG"/>
        </a>
    </div>
);

export default Image;