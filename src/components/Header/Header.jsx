import React, { useState, useContext } from 'react';
import './Header.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import Menu from '@components/Menu/Menu';
import MyOrder from '@containers/MyOrder/MyOrder';
import AppContext from '../../context/AppContext';



const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => { setToggle(!toggle); }

	return (
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
			<Container fluid className="px-4">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" className='mb-2 mt-2'/>
			<Navbar.Brand><img src={logo} alt="logo" className="nav-logo ms-3" href="#"></img></Navbar.Brand>
        	<Navbar.Collapse id="responsive-navbar-nav"  className='text-center'>
        	    <Nav className="me-auto">
        	        <Nav.Link href="#" className="ms-2 navbar-link">All</Nav.Link>
        	        <Nav.Link href="#" className="ms-2 navbar-link">Clothes</Nav.Link>
        	        <Nav.Link href="#" className="ms-2 navbar-link">Electronics</Nav.Link>
        	        <Nav.Link href="#" className="ms-2 navbar-link">Furnitures</Nav.Link>
        	        <Nav.Link href="#" className="ms-2 navbar-link">Toys</Nav.Link>
        	        <Nav.Link href="#" className="ms-2 navbar-link">Others</Nav.Link>
        	    </Nav>
        	</Navbar.Collapse>
			<Navbar.Brand className='ms-auto mb-2 mt-2'>
				<div className="navbar-right">
					<ul className='d-flex align-items-center justify-content-center py-0 my-0'>
						<li className="navbar-email me-4" onClick={handleToggle}>platzi@example.com</li>
						<li className="navbar-shopping-cart"
							onClick={() => setToggleOrders(!toggleOrders)}
						>
							<img src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0
								? <div className='d-flex justify-content-center align-items-center fw-bold'>
									{state.cart.length}
								</div>
								: null
							}
						</li>
					</ul>
				</div>
			</Navbar.Brand>
        	</Container>
    	</Navbar>
	);
}

export default Header;
