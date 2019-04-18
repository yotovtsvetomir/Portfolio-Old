import { h } from 'preact';
import render from 'preact-render-to-string';

const Portfolio = () => (
	<div className="section" style="padding-top: 0;">
    <div className="portfolio">
      <div className="section_head">
        <div className="shell">
          <h1>Portfolio</h1>
          <div className="categories">
            <a className="active" href="#">All</a>
            <a href="#">Full stack</a>
            <a href="#">SPA</a>
            <a href="#">Other</a>
          </div>
        </div>
      </div>
      <div className="section_body">
        <div className="shell">
          <div className="gallery">
            <a className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </a>
            <div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
            <div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
            <div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
						<div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
						<div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
						<div className="gallery-image">
              <img src="https://placehold.it/390x280" alt="pl"/>
							<div className="hov">
								<h2>Item Name</h2>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
);

export default Portfolio;
