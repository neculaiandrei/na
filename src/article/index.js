import React, { Component } from "react";
import Video from "../video";
import "./style.css";

class Article extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="title">Article 1</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vehicula, velit nec imperdiet elementum, risus eros gravida
                enim, quis suscipit purus lacus ut nisi.
              </p>
              <Video />
              <p>
                Ut sodales porta porttitor. Nulla ullamcorper leo vel diam
                aliquam commodo. Ut a erat sollicitudin, luctus nibh sit amet,
                ultricies sem. Vestibulum aliquam tortor ac lectus iaculis
                consectetur. Pellentesque ligula magna, volutpat sed cursus sed,
                molestie eu lorem. Nullam ac elit vitae mi imperdiet auctor.
                Phasellus vel cursus ipsum. Donec et ipsum est. Nunc molestie
                diam quis enim posuere viverra et sed dui. Nullam rhoncus urna
                ac felis lacinia condimentum. Curabitur auctor augue quis magna
                fermentum, non scelerisque mi pellentesque. Nulla egestas
                vulputate placerat. Quisque fringilla dapibus velit quis
                suscipit. Nulla id imperdiet ipsum.
              </p>
              <p>
                Duis auctor mattis lorem, vitae porttitor ante condimentum in.
                Etiam ac libero urna. Sed at lectus eu urna accumsan dignissim.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nullam vulputate ligula aliquam, rhoncus
                dui ut, facilisis lectus. Morbi at ligula condimentum, laoreet
                urna vitae, venenatis justo. Integer non diam metus.
              </p>
              <p>
                Vestibulum tempus tellus id blandit dapibus. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Cras tempor lorem id elit
                convallis lacinia. Praesent ut turpis risus. Nunc malesuada
                magna felis, consequat malesuada arcu congue et. Praesent ac
                pretium libero. Vivamus ultricies erat et odio gravida, ac
                lacinia mi blandit. Nulla consequat risus augue, a suscipit arcu
                fermentum quis. Phasellus convallis est iaculis, volutpat mi
                lacinia, dictum erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
