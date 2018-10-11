import React, {Component} from 'react';
import Image from './Image';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    };

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            console.log(Object.keys(this.props.data));
            /* this.props.data.forEach(
                this.setState(prevState => ({
                    images: [...prevState.images, this.data.photos.img_src]
                }))
            ); */
        }
    }

    // Add image lightbox eventually
    renderImage = (imageUrl) => {
        return(
            <Image img_src={imageUrl}/>
        );
    }

    render(){
        const data = this.props.data;
        const count = Object.keys(data).length;
        const photos = count > 0 ? data.photos[0].img_src : null; 

        return(
            <div className="gallery-component">
                <div className="row">
                    <p>Gallery</p>
                    {photos && <Image img_src={photos}/>}
                </div>             
            </div>
        );
    };
}

export default Gallery;