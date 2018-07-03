import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Stage, Layer, Image } from 'react-konva';

class ShowImage extends Component {
  constructor(props){
    super(props);
    this.props = props;

    this.state = {
      image : null,
    };
  }

  componentDidMount() {
    this.updateImage();
  }

  componentDidUpdate() {
    this.updateImage();
  }

  updateImage() {
    const image = new window.Image();
    image.src = this.props.image;
    this.props.image;
    image.onload = () => {
        this.setState({
            image: image
        });
    };
  }
  

  render(){
    return (
      <Stage
        width={ 500 }
        height={ 500 }
        color="black"
      >
        <Layer>
         <Image image={ this.state.image } />
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = ( state ) => ({
  image : state.image,
});

export default connect(mapStateToProps)(ShowImage);