import React from 'react';
import PropTypes from 'prop-types';



const Image = props => (
    <div className="col-md-3">
        <a href={props.img_src}>
            <img className="img-thumbnail" src={props.img_src} alt="Rover_IMG"/>
        </a>
    </div>
);

Image.defaultProps = {
    img_src: null
}

Image.propTypes = {
    img_src: PropTypes.any.isRequired
}

export default Image;