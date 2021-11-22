import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import pizzaImage from './assets/images/pizzas/cadonation.jpg'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { CardContent, Divider } from '@material-ui/core';
import {CardActions, makeStyles, CardMedia,} from '@material-ui/core';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const style = {
    position: 'relative',
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 710,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const useStylePizzaItem = makeStyles(() => ({
    pizzaItem: {
        position: "relative",
        display: "flex",
        flex: "1 1 auto",
        top: "10rem",
        marginBottom: "2rem",
        boxSizing: "border-box",
    },
}));

const useStylesButtons = makeStyles(() => ({
    buttonElements: {
        position: "relative",
        top: "11rem",
        right: "1rem",
        left: "5rem",
    },
}));

const useStyleText = makeStyles(() => ({
    textElements: {
        position: "absolute",
        display: "flex",
        textAlign: "right",
        width: "55%",
        height: "55%",
        bottom: "8rem",
        left: "16rem",
    }
}));

const useStylePrice = makeStyles(() => ({
    priceElement: {
        position: "absolute",
        top: "-2rem",
        left: "200px",
    }
}));

const useStyleCard = makeStyles(() => ({
    cardElement: {
        display: "flex",
        position: "relative"
    }
}));


//const PizzaItem = (props) => {


export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {pizzaItem} = useStylePizzaItem();
    const {buttonElements} = useStylesButtons();
    const {textElements} = useStyleText();
    const {priceElement} = useStylePrice();
    const {cardElement} = useStyleCard();

    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    const decrementCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className={pizzaItem}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ShoppingCartOutlinedIcon fontSize="large" style={{
                        color: 'black'
                    }}/>
                    <div className={cardElement}>
                        <CardMedia
                            image={pizzaImage}
                            alt="margarita-pizza"
                            component="img"
                            height="250"
                            style={{width: "50%"}}
                        />
                        <div className={textElements}>
                            <CardContent style={{maxHeight: "300px"}}>
                                <Typography gutterBottom variant="h4" component="div">
                                    Basil
                                </Typography>
                                <Typography style={{fontSize: "15px"}} variant="h5" color="text.secondary">
                                    ost, tomatsaus, bacon, basilikum, sjampinjong, oliven
                                </Typography>
                                <Typography style={{fontWeight: "bold", fontSize: "27px"}}>
                                    Medium
                                </Typography>
                            </CardContent>
                        </div>
                        <div className={buttonElements}>
                            <CardActions>
                                <Button onClick={decrementCounter} size={"small"} variant={"outlined"}>-</Button>
                                <span style={{
                                    width: "2rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                }}>{counter}</span>
                                <Button size={"small"} variant={"outlined"} onClick={incrementCounter}>+</Button>
                            </CardActions>
                        </div>
                        <Divider style={{
                            position: 'relative',
                            right: '450px',
                            top: '250px',
                            backgroundColor: 'black',
                            height: '5px',
                            width: '700px'
                        }} variant="middle"/>
                    </div>
                    <Button style={{
                        color: 'white',
                        backgroundColor: '#009688',
                        position: 'relative', top: '20px', left: '10rem'
                    }} variant="outlined" endIcon={<ShopIcon />} size={"large"}>
                        Checkout
                    </Button>

                    <Button style={{
                        color: 'white',
                        backgroundColor: '#009688',
                        position: 'relative', top: '20px', left: '15rem'
                    }} variant="outlined" endIcon={<AddShoppingCartIcon />} size={"large"}>
                        Fortsett å handle
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
