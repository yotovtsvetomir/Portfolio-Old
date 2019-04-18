import { h, Component } from 'preact';
import render from 'preact-render-to-string';
import More from 'react-icons/lib/md/more-vert'
import Close from 'react-icons/lib/md/close'
import Slide from 'react-reveal/Slide';

export default class Card extends Component {
  state = { visible: false, he: "height: 80%" };

  toggle = () => {
    this.setState({ visible: !this.state.visible})
    if (this.state.visible == true) {
      this.setState({ he: "height: 100%"})
    }
    else {
      this.setState({ he: "height: 80%"})
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card_head">
          <h2>January 2018 - Present</h2>
        </div>
        <div className="card_image">
          <img src="https://placehold.it/400x300" alt="bgr" />
        </div>
        <div className="card_content">
          <div className="between">
            <span className="card-title activator">Full Stack Developer</span>
            <a onClick={this.toggle} className="activator"><More size={23} color="#2196f3" /></a>
          </div>
          <p>Freelancer</p>
        </div>
        <div className="sld" style={this.state.he}>
          <Slide bottom duration={300} when={this.state.visible}>
            <div id="rev" className="card-reveal">
              <div className="rev-title">
                <div className="card_content">
                  <div className="between">
                    <span className="card-title activator">Full Stack Developer</span>
                    <a onClick={this.toggle} className="activator"><Close size={23} color="#2196f3" /></a>
                  </div>
                  <p>Freelancer</p>
                </div>
              </div>
              <div className="rev-content">
                <p>Collaboratively initiate collaborative schemas for high-quality communities. Objectively create sticky relationships via team building outsourcing. </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
