import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "./Cart.js";
import MobileCart from "./MobileCart.js";
import {Link} from "react-router-dom";
import {useMediaQuery, useTheme} from "@material-ui/core";

const style = {
	position: 'relative',
	borderRadius: '12px',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 710,
	
	bgcolor: 'background.paper',
	border: '1px solid #000',
	boxShadow: 24,
	p: 4
};


function ModalCart({open, onClose}) {

	
	const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div>
			{isMatch ? <Modal style={{overflow: "scroll"}} open={open} onClose={onClose} aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
				<Box sx={style}>
					<MobileCart/>

					<Button onClick={onClose} component={Link} to="/pizza" style={{
						color: 'white',
						backgroundColor: '#006357',
						position: 'relative', top: '20px', left: '17%'
					}} variant="outlined" endIcon={<AddShoppingCartIcon/>} size={"large"}>
						Fitte å fitte
					</Button>

					<Button onClick={onClose} component={Link} to="/checkOut" style={{
						color: 'black',
						backgroundColor: '#FFD148',
						position: 'relative', top: '20px', left: '30%', margin: "20px"
					}} variant="outlined" endIcon={<ShopIcon/>} size={"large"}>
						Fitte
					</Button>

				</Box>
			</Modal>: (
					<Modal style={{overflow: "scroll"}} open={open} onClose={onClose} aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Cart/>

					<Button onClick={onClose} component={Link} to="/pizza" style={{
						color: 'white',
						backgroundColor: '#006357',
						position: 'relative', top: '20px', left: '17%'
					}} variant="outlined" endIcon={<AddShoppingCartIcon/>} size={"large"}>
						Fortsett å handle
					</Button>

					<Button onClick={onClose} component={Link} to="/checkOut" style={{
						color: 'black',
						backgroundColor: '#FFD148',
						position: 'relative', top: '20px', left: '30%', margin: "20px"
					}} variant="outlined" endIcon={<ShopIcon/>} size={"large"}>
						Checkout
					</Button>

				</Box>
			</Modal>
			)}
				
		</div>
	);
}


export default ModalCart;