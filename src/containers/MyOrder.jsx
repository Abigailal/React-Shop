import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import {AppContext} from '../context/AppContext';
import { Link } from 'react-router-dom';

function formatNumber(number){
	return new Intl.NumberFormat( "ES-MX", {
		style:'currency',
		currency: 'MXN',
	}).format(number);
}


const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}


	return (
		<>
			<div>
				<p className="fw-bold fs-4 mb-4">My order</p>
			</div>
			<div>
				{state.cart.map(product => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}`}
					/>
				))}
				<div className="d-flex justify-content-center align-items-center">
					<p className='me-auto fw-bold fs-5'><span>Total</span></p>
					<p className='ms-auto fw-bold fs-5'>{formatNumber(sumTotal())}</p>
				</div>

				<Link type='button' className="primary-button text-center pt-2"
				to='/checkout'>Checkout</Link>
			</div>
		</>
	);
}

export default MyOrder;
