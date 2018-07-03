import React, { Component } from 'react';
import { connect } from 'react-redux';

class UploadButton extends Component{
  constructor(props){
    super(props);

    this.props = props;

    this.uploadInput = React.createRef();
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload({target}){
    // const file = target.files[0];
    // const fileBlob =window.URL.createObjectURL(file);

    // console.log("UploadButton.js");
    // console.log(file);

    // this.props.dispatch({
    //   type: 'UPLOAD_IMAGE',
    //   image: fileBlob, 
    // });

    const reader = new FileReader();
    const file = target.files[0];
    reader.onloadend = () => {
      this.props.dispatch({
        type: 'UPLOAD_IMAGE',
        image: reader.result, 
      });
    };
    reader.readAsDataURL(file);

    // const file = target.files[0];
    // this.props.dispatch({
    //   type: 'UPLOAD_IMAGE',
    //   image: file, 
    // });

    // const reader = new FileReader()
    // const file = target.files[0];
    // reader.readAsDataURL(file);
    // reader.onload = evt =>
    //   this.props.dispatch(
    //     {
    //       type: 'UPLOAD_IMAGE',
    //       image: evt.target.result, 
    //     }
    // );
  }

  render(){
    return(
      <div>
        <input 
          value="Upload" 
          type="button" 
          onClick={ () => { this.uploadInput.click() } } 
        />
        <input 
          id="inputUpload"
          ref={ (ref) => { this.uploadInput = ref } }
          type="file" 
          style={ { display: 'none' } } 
          onChange = { (event) => { this.handleUpload(event) }}
        />
      </div>
    );
  }
}

export default connect()(UploadButton);