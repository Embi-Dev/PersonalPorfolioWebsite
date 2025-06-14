import { useEffect, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import TechStack from './components/TechStack'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import FixedIconLayer from './components/FixedIconLayer'

function App() {
	useEffect(() => {
		if (window.location.hash) {
			const url = window.location.href.split('#')[0];
			window.history.replaceState(null, '', url);
		}
		const home = document.getElementById("home");
		if (home) {
			home.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div >
			<Header />
			<div className='main-container'>
				<Home />
				<About />
				<Experience />
				<TechStack />
				<Projects />
				<Contacts />
			</div>
			<FixedIconLayer />	
		</div>
	)
}

export default App
