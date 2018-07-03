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
    const file = target.files[0];
    const fileBlob =window.URL.createObjectURL(file);

    this.props.dispatch({
      type: 'UPLOAD_IMAGE',
      image: fileBlob, 
    });
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