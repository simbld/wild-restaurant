import PropTypes from 'prop-types';

function MenuList({ foodItems }) {
	console.log(foodItems);
	return (
		<div>
			{/*render a MenuItem component to each element of the props array*/}
		</div>
	);
}
MenuList.propTypes = {
	foodItems: PropTypes.string.isRequired,
};

export default MenuList;
