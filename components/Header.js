import { h } from 'preact';
import render from 'preact-render-to-string';
import Menu from 'react-icons/lib/md/menu';

function openMenu() {
	var menu = document.getElementById('mob-nav');
	if (menu.style.top == "70px") {
		menu.style.top = "-400px";
	}
	else {
		menu.style.top = "70px";
	}
}

const Header = () => (
	<header>
		<div className="header_wrapper">
			<div className="shell">
				<div className="header-inner">
					<a className="logo" href="#"></a>
					<div className="nav">
						<a href="">About</a>
						<a href="">Education</a>
						<a href="">Experience</a>
						<a href="">Portfolio</a>
						<a href="">Contact</a>
					</div>
					<a className="btn-open" onClick={openMenu}>
						<Menu size={33} color="#555" />
					</a>
					<div className="mob-nav" id="mob-nav">
						<a href="">About</a>
						<a href="">Education</a>
						<a href="">Experience</a>
						<a href="">Portfolio</a>
						<a href="">Contact</a>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
