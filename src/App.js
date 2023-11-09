import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import ScrollToHashElement from './ScrollToHashElement';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import MyTech from './components/Projects/MyTech';
import Footer from './components/Footer/Footer';
function App() {
	return (
		<div>			
			<ScrollToTop />
			<ScrollToHashElement />
			<Header />
			<LandingPage />
			<MyTech />
			<Projects />
			<Contact />
			<Footer />
			
		</div>
	);
}

export default App;