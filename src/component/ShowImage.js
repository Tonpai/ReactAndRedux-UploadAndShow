import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Stage, Layer, Image } from 'react-konva';

class ShowImage extends Component {
  constructor(props){
    super(props);
    this.props = props;

    this.state = {
      image : new window.Image(),
    };

    this.imageNode = React.createRef();
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    this.updateImage();
  }

  componentDidUpdate() {
    this.updateImage();
  }

  updateImage() {
    // const image = new window.Image();
    // image.src = this.props.image;
    // this.props.image;
    // image.onload = () => {
    //     this.setState({
    //         image: image
    //     });
    // };

    this.state.image.src = this.props.image;
    this.state.image.onload = () => {
      this.imageNode.getLayer().batchDraw();
      console.log("updateImage");
    }
  }
  

  render(){
    return (
      <Stage
        width={ 500 }
        height={ 500 }
        color="black"
      >
        <Layer>
         <Image image={ this.state.image } ref={ node => { this.imageNode = node }} />
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = ( state ) => ({
  image : state.image,
  isUpdate : state.isUpdate,
});

export default connect(mapStateToProps)(ShowImage);