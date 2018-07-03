import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Stage, Layer, Image } from 'react-konva';

class ShowImage extends Component {
  constructor(props){
    super(props);
    this.props = props;

    this.state = {
      image : new window.Image(),
    }

    this.imageTag = React.createRef();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
    console.log(this.props.image);

    // if(this.state.image !== this.props.image){
    //   this.setState({
    //     image: this.props.image,
    //   });
    // }
  }

  componentDidMount(){
    if(this.props.image === null) return; 

    this.setState(prevState => ({
      image: {
        ...prevState.image,
        src : this.props.image,
        onload : () => {
          this.imageTag.getLayer().batchDraw();
        }
      }
    }))
  }

  render(){
    return (
      <Stage
        width={ 500 }
        height={ 500 }
      >
        <Layer>
         <Image ref={ (ref) => { this.imageTag = ref } } image={ this.state.image } ></Image>
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = ( state ) => ({
  image : state.image,
});

export default connect(mapStateToProps)(ShowImage);