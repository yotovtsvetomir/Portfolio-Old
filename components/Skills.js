import { h } from 'preact';
import render from 'preact-render-to-string';
import Slider from "react-slick";
import Prev from 'react-icons/lib/md/navigate-before'
import Next from 'react-icons/lib/md/navigate-next'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="next" onClick={onClick}><Next size={30} color="#fff" /></a>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="prev" onClick={onClick}><Prev size={50} color="#fff" /></a>
  );
}

const settings = {
      dots: false,
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };

const Skills = () => (
	<div className="skills">
    <div className="shell">
      <div className="skills_wrapper">
        <div className="section_head">
          <h1>Skills</h1>
          <p>Man behind the gun, any sophisticated weapons. Human remains that taking the role. We are experienced in utilizing all resources.</p>
        </div>
        <div className="owlslide">
          <Slider {...settings}>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>Css</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 60%"></div>
              </div>
              <span>90%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>Html</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block"></div>
              </div>
              <span>100%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>Javascript</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 50%"></div>
              </div>
              <span>80%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>Webpack</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 30%"></div>
              </div>
              <span>50%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>Python</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 50%"></div>
              </div>
              <span>80%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>React</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 45%"></div>
              </div>
              <span>70%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>React</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 45%"></div>
              </div>
              <span>70%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>React</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 45%"></div>
              </div>
              <span>70%</span>
            </div>
            <div>
              <div className="skill">
                <div className="skill-head">
                  <p>React</p>
                  <div className="dot"></div>
                  <div className="sline"></div>
                </div>
                <div className="block" style="height: 45%"></div>
              </div>
              <span>70%</span>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
