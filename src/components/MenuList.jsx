import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function MenuList({ foodItems }) {
	return (
		<div>
			{foodItems.map((foodItem, index) => (
				<MenuItem key={index} {...foodItem} />
			))}
		</div>
	);
}

MenuList.propTypes = {
	foodItems: PropTypes.arrayOf(
		PropTypes.shape({
			itemName: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			foodImage: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			isFavorite: PropTypes.bool.isRequired,
		}),
	).isRequired,
};

export default MenuList;
