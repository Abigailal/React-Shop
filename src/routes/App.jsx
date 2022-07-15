import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout/Layout';
import Home from '@pages/Home/Home'
import Login from '@pages/Login/Login';
import PasswordRecovery from '@pages/PasswordRecovery/PasswordRecovery';
import SendEmail from '@pages/SendEmail/SendEmail';
import NewPassword from '@pages/NewPassword/NewPassword';
import MyAccount from '@pages/MyAccount/MyAccount';
import CreateAccount from '@pages/CreateAccount/CreateAccount';
import Checkout from '@pages/Checkout/Checkout';
import Orders from '@pages/Orders/Orders';
import NotFound from '@pages/NotFound/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

//shortcut slr
const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route exact path="/login" element={<Login/>} />
						<Route exact path="/password-recovery" element={<PasswordRecovery/>} />
						<Route exact path="/send-email" element={<SendEmail/>} />
						<Route exact path="/new-password" element={<NewPassword/>} />
						<Route exact path="/account" element={<MyAccount/>} />
						<Route exact path="/signup" element={<CreateAccount/>} />
						<Route exact path="/checkout" element={<Checkout/>} />
						<Route exact path="/orders" element={<Orders/>} />
						<Route path="*" element={<NotFound/>} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
