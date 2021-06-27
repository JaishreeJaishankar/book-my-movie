import React,{Component} from 'react';
import './Header.css';
import logo from "../../assets/logo.svg"
import Button from "@material-ui/core/Button";



const Header = () =>{
    return (
        <React.Fragment>
            <div className="header">
                <div className="logoPosition">
                    <img src={logo} className="logo" alt="logo"></img>
                </div>
                <div className="headerButtonPosition">
                    {/* <Button className="headerButton" variant="contained" style={{ marginLeft: "10px" }} color="primary" name="bookShow">
                        Book Show
                    </Button> */}
                    <Button className="headerButton" variant="contained" style={{ marginLeft: "10px" }} name="login">
                        Login
                    </Button>
                    
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;