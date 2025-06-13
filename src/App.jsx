import { useEffect, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Experience'
import TechStack from './components/TechStack'
import About from './components/About'

function App() {
	useEffect(() => {
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
				<Projects />
				<TechStack />
			</div>
		</div>
	)
}

export default App
