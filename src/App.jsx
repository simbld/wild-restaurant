import './styles/App.css';
import MenuList from './components/MenuList';
import foodItems from './services/Data';

const App = () => {
	return (
		<div>
			<h1>Wild Restaurant Menu</h1>
			<MenuList foodItems={foodItems} />
			{/* pass the variable foodItems as props to MenuList component */}
		</div>
	);
};

export default App;
