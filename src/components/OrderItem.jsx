import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import { BsTrash } from 'react-icons/bs';
import {AppContext} from '../context/AppContext';

function formatNumber(number){
	return new Intl.NumberFormat( "ES-MX", {
		style:'currency',
		currency: 'MXN',
	}).format(number);
}


const OrderItem = ({ product }) => {
	const { removeFromCart } = React.useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{formatNumber(product.price)}</p>
			<BsTrash
        		className="Icon-delete mb-3"
				onClick={() => handleRemove(product)}
      		/>

		</div>
	);
}

export default OrderItem;
