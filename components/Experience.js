import { h } from 'preact';
import render from 'preact-render-to-string';
import Slider from "react-slick";
import Prev from 'react-icons/lib/md/navigate-before'
import Next from 'react-icons/lib/md/navigate-next'
import Card from './Card'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="next" onClick={onClick}><Next size={26} color="#2196f3" /></a>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="prev" onClick={onClick}><Prev size={26} color="#2196f3" /></a>
  );
}

const settings = {
      focusOnSelect: false,
      dots: false,
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };


const Experience = () => (
  <div className="section" style="background: #2196f3">
    <div className="experience">
      <div className="shell">
        <div className="section_head">
          <h1>Experience</h1>
          <p>Aliquam lobortis. Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Nulla sit amet est. Aenean posuere tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
        </div>
        <div className="owlslide">
          <Slider {...settings}>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
