import React, { Component } from 'react';
import { connect } from 'react-redux';

import UploadButton from './component/UploadButton';
import ShowImage from './component/ShowImage';

class App extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        Upload file with button to Redux
        <UploadButton/>
        <ShowImage/>
      </div>
    );
  }
}

const mapStateToProp = (state) =>({
  state,
});

export default connect(mapStateToProp)(App);
