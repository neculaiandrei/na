import React, { Component } from "react";
import { Player } from "video-react";
import Youtube from "react-youtube";
import "../../node_modules/video-react/dist/video-react.css";
import "./style.css";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      useBackup: false
    };
  }

  onYoutubeReady = event => {
    event.target.pauseVideo();
  };

  onYoutubeError = () => {
    this.setState({
      useBackup: true
    });
  };

  render() {
    let player = null;

    if (this.state.useBackup) {
      player = (
        <Player height={200} width={355} fluid={false} src="joey_tape.mp4" />
      );
    } else {
      player = (
        <Youtube
          videoId="ZpMSeYYnyhc"
          opts={{
            height: 200,
            width: 355,
            playerVars: {
              autoplay: 1
            }
          }}
          onReady={this.onYoutubeReady}
          onError={this.onYoutubeError}
        />
      );
    }

    return player;
  }
}

export default Video;
