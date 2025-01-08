import ButtonGradient from './assets/svg/ButtonGradient'
import Classes from './components/Classes';
import Header from './components/Header'
import Hero from './components/Hero';
import './index.css'

const App = () => {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header/>
				<Hero/>
				<Classes/>
			</div>
			<ButtonGradient/> 
		</>
	);
}

export default App;
