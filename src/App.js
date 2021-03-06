import React from 'react';
import './App.css';
import './components/assets/css/fonts.css'
import Header from './components/HeaderAndFooter/Header.js';
import ReserveTable from './components/Reservation/ReserveTable';
import {CartProvider} from "react-use-cart";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import PizzaStorage from "./components/FoodMenu/PizzaStorage.js";
import SaladStorage from "./components/FoodMenu/SaladStorage.js";
import BeverageStorage from "./components/FoodMenu/BeverageStorage.js";
import ModalCart from "./components/Cart/ModalCart.js";
import {Route, Routes} from 'react-router-dom';
import {paths} from './components/SideBar/SideBarData.js';
import Checkout from "./components/checkoutComponents/Checkout";
import Footer from './components/HeaderAndFooter/Footer.js';
import CampaignStorage from "./components/CampaignItem/CampaignStorage.js";

const font = "'Zen Maru Gothic', sans-serif";

const theme = createTheme({
	typography: {
		fontFamily: font,
	},
	button: {
		textTransform: "none",
	},
	palette: {
		info: {
			main: '#ff0000'
		},
	},
});


function App() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [openCart, setOpenCart] = React.useState(false);
	const handleOpenCart = () => setOpenCart(true);
	const handleCloseCart = () => setOpenCart(false);

	return (
		<div style={{width: "100%", height: "100vh"}}>
			<ThemeProvider theme={theme}>
				<CartProvider>
					<Header func1={handleOpen} func2={handleOpenCart}/>
					<ReserveTable open={open} onClose={handleClose} onBackDropClick={handleClose}/>
					<Routes>
						<Route path="/checkOut" element={<Checkout/>}/>
					</Routes>

					<Routes>
						<Route exact path="/" element={<CampaignStorage/>}/>
					</Routes>

					<Routes>
						<Route path={paths.PIZZA} element={<PizzaStorage/>}/>
						<Route path={paths.SALAD} element={<SaladStorage/>}/>
						<Route path={paths.DRINKS} element={<BeverageStorage/>}/>
					</Routes>
					<Footer/>
					<ModalCart open={openCart} onClose={handleCloseCart}/>
				</CartProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
