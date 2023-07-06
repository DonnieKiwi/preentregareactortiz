import { useState } from "react";
import {AppBar, Toolbar, Button, Typography } from '@mui/material';
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const Navbar = ({menuItems}) => {
    const [show, setShow] = useState (true);
    const handleClick = () => {

    }
    
    return (<>
        <AppBar position= "static">
            <Toolbar>
                {show && menuItems.map((item, index) =>{
                    return <Button key={index} color="inherit" onClick={handleClick}>{item.text}</Button> 

                })}
                <ShoppingCartTwoToneIcon sx={{ position: "absolute", right: 0, marginRight: "30px" }}/>
                <Typography sx= {{
                    position: "absolute", right: 0, marginRight: "10px"}}>
                    (12)
                </Typography>
            </Toolbar>
        </AppBar>
    
        <Button variant="outlined">Greetings</Button>
    </>);

    }

export default Navbar;
