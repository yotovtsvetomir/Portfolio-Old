import './styles/style.scss'
import { h, Component } from 'preact'
import render from 'preact-render-to-string'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => (
	<div>
		<Header />
		<Intro />
		<About />
		<Skills />
		<Experience />
		<Education />
		<Portfolio />
		<Contact />
	</div>
);

export default App;
