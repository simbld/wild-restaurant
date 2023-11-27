import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/App.css';

function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
	const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
	const handleClickFavorite = () => {
		setIsFavoriteState(!isFavoriteState);
	};

	return (
		<div className="itemContainer">
			<div className="leftContainer">
				<div className="imgContainer">
					<img src={foodImage} alt={itemName} />
				</div>
				<div className="itemDescription">
					<h3>{itemName}</h3>

					<p>{description}</p>
				</div>
			</div>
			<div className="rightContainer">
				<div>{price} EUR</div>

				<div
					id="favorite"
					onClick={handleClickFavorite}
					className={isFavoriteState ? 'isFavorite' : 'notFavorite'}
				/>
			</div>
		</div>
	);
}

MenuItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	foodImage: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	isFavorite: PropTypes.bool.isRequired,
};

export default MenuItem;
