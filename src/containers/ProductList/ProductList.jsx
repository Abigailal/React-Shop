import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';
import useGetProducts from '../../hooks/useGetProducts';
import './ProductList.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
