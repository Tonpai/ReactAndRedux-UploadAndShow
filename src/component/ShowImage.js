import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Stage, Layer, Image } from 'react-konva';

class ShowImage extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
    console.log(this.props.image);
    //FIX HERE
  }

  render(){
    return (
      <Stage
        width={ 500 }
        height={ 500 }
      >
        <Layer>
          <Image
            image={null}
          />
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = ( state ) => ({
  image : state.image,
});

export default connect(mapStateToProps)(ShowImage);