import { h } from 'preact';
import render from 'preact-render-to-string';
import Download from 'react-icons/lib/md/file-download';
import Git from 'react-icons/lib/fa/git'
import Linkedin from'react-icons/lib/fa/linkedin'

const About = () => (
  <div className="about">
    <div className="shell">
      <div className="about_wrap">
        <div className="person-about">
          <h3>My Story</h3>
          <p>Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia. I hold a master degree of Web Design from the World University. <br/>
          And scrambled it to make a type specimen book. It has survived not only five centuries</p>
          <a className="btn-download" href="/"><Download size={26} /> Download Resume</a>
        </div>
        <div className="flexer">
          <div className="person-image">
            <img src="../assets/me.jpg" alt="Tsvetomir Yotov" />
          </div>
          <div className="person">
            <div className="person-info">
              <h3>Personal Information</h3>
              <h5><span>Name :</span> Tsvetomir Yotov</h5>
              <h5><span>Age :</span> 25</h5>
              <h5><span>Phone :</span> +359888778723</h5>
              <h5><span>Email :</span> yotovtsvetomir@gmail.com</h5>
              <h5><span>Address :</span> Varna, Bulgaria</h5>
            </div>
            <div className="person-social">
              <a href="">
                <Linkedin size={18} />
              </a>
              <a href="">
                <Git size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
