import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './components/AboutMe/About';
import Nav from './components/Header/Nav';
function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/porfolio" element={<HomePage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		
		</>
	);
}

export default App;
