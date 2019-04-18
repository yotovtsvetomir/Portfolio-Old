import { h } from 'preact';
import render from 'preact-render-to-string';
import Send from 'react-icons/lib/md/send';
import ArrowDown from 'react-icons/lib/md/keyboard-arrow-down';

const Intro = () => (
	<div className="intro">
		<div className="shell">
			<div className="intro__content">
				<div className="intro_wrap">
					<h1>I'm <span>Tsvetomir</span></h1>
					<h2>Full stack web developer</h2>
					<a className="btn-hire" href="#contact"><Send size={20} />Hire me</a>
				</div>
			</div>
			<a className="btn-scroll" href="/"><ArrowDown size={26} /></a>
		</div>
	</div>
);

export default Intro;
