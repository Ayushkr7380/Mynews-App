import { Component } from "react";
import LoadingBar from 'react-top-loading-bar'

export default class Toploadingbar extends Component {
    
    
  render() {
    return (
      <div>
        <LoadingBar
          color="#f11946"
          progress={this.props.progress}
          onLoaderFinished={() => this.props.setprogress(0)}
        />
      </div>
    );
  }
}
