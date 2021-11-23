import {AppBar, Badge, Fab, Toolbar, useMediaQuery, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import HeaderButton from "./HeaderButton";
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";
import {useCart} from "react-use-cart";
import IconButton from '@mui/material/IconButton';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFD148",
    },
}));


function Header({func1, func2}) {
    const {header} = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <AppBar className={header}><Toolbar style={{
                position: 'relative',
                alignItems: 'right',
                justifyContent: 'right',
                backgroundColor: '#FFD148',
                height: '4.5rem'
            }}>
                <IconButton
                    component={Link}
                    to="/"
                    size="large"
                    aria-label="menu"
                    sx={{mr: 'auto'}}
                >
                    <FoodBankIcon style={{fontSize: '70px', color: '#009688'}}/>
                    <Typography style={{font: "'Zen Maru Gothic', sans-serif", fontSize: '30px', fontWeight: 'bold'}}
                                component="div" sx={{mr: 'auto'}}>
                        Barcelona Pizza & Salad
                    </Typography>
                </IconButton>

                {isMatch ? <DrawerComponent/> : (
                    <>
                        <HeaderButton text="Hjem" href={'/'}/>
                        <HeaderButton icon={<EventSeatRoundedIcon/>} text="Reserver" click={func1}/>
                        <HeaderButton icon={<RestaurantMenuRoundedIcon/>} text="Meny" href='/pizza'/>
                    </>
                )}


                <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} color="info" overlap="circular"
                       badgeContent={useCart().totalItems}>
                    <Fab style={{backgroundColor: '#009688'}} onClick={func2}>
                        <ShoppingCartOutlinedIcon fontSize="large" style={{
                            color: 'black',
                            marginLeft: '0.5em',
                            marginRight: '0.5em'
                        }}/>
                    </Fab>
                </Badge>
            </Toolbar></AppBar>
        </div>
    );
}

export default Header
