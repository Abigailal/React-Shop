import React, { useState } from 'react';
import '@styles/Header.scss';
import MyOrder from '../containers/MyOrder';
import logo from '@logos/logo_yard_sale.svg';
import {AppContext} from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {
	const [show, setShow] = useState(false);
	const { state } = React.useContext(AppContext);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="ligth" variant="ligth" className='bar-fondo'>
			<Container fluid className="px-4">
				<Navbar.Brand>
					<img src={logo} alt="logo" className="nav-logo ms-3 pb-1" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className='mb-2 mt-2'/>
				<Navbar.Collapse id="responsive-navbar-nav justify-content-center align-items-center">
					<Nav className="me-auto ms-3">
						<Nav.Link href="/" className='navbar-link'>All</Nav.Link>
						<Nav.Link href="/" className='navbar-link'>Clothes</Nav.Link>
						<Nav.Link href="/" className='navbar-link'>Electronics</Nav.Link>
						<Nav.Link href="/" className='navbar-link'>Furnitures</Nav.Link>
						<Nav.Link href="/" className='navbar-link'>Toys</Nav.Link>
						<Nav.Link href="/" className='navbar-link'>Others</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown title="platzi@example.com" id="collasible-nav-dropdown" className="navbar-email menu">
							<NavDropdown.Item href="/orders" className='fw-bold fs-5'>My orders</NavDropdown.Item>
							<NavDropdown.Item href="/account" className='fw-bold '>My account</NavDropdown.Item>
							<hr className='mx-2'/>
							<NavDropdown.Item href="/signup" className='sign-green'>Sign in</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link id='shopping-cart'>
							<button type='button' className="navbar-shopping-cart btn-cart" onClick={handleShow}>
								<img src={shoppingCart} alt="shopping cart" />
									{state.cart.length > 0 ? <div className='d-flex justify-content-center align-items-center fw-bold'
									>{state.cart.length}</div> : null}
							</button>
							<Offcanvas show={show} onHide={handleClose}>
								<Offcanvas.Header closeButton className='ms-auto'/>
								<Offcanvas.Body>
									<MyOrder/>
								</Offcanvas.Body>
							</Offcanvas>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
