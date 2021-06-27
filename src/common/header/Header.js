import React,{Fragment, useState} from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'

import './Header.css';
import logo from "../../assets/logo.svg"


// const Header = () =>{
//     return (
//         <Fragment>
//             <div className="header">
//                 <div className="logoPosition">
//                     <img src={logo} className="logo" alt="logo"></img>
//                 </div>
//                 <div className="headerButtonPosition">
//                     <Button className="headerButton" variant="contained" style={{ marginLeft: "10px" }} color="primary" name="bookShow">
//                         Book Show
//                     </Button>
//                     <Button className="headerButton" variant="contained" style={{ marginLeft: "10px"}} name="login">
//                         Login
//                     </Button>
                    
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default Header;



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}



TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}


const Header = ( props ) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [loginForm,setLoginForm] = useState({
        username:"",
        password:""
    });
    const [registerForm,setRegisterForm] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        contact:""
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("access-token")== null ? false : true);
    const [loginApiError, setLoginApiError] = useState("");
   


    const openModalHandler = () => {
        
        setModalIsOpen(true);
        setValue(0);
        setLoginForm({username:"",password:""});
        setRegisterForm({
                            firstname:"",
                            lastname:"",
                            email:"",
                            password:"",
                            contact:""
                        })  
    }


   const closeModalHandler = () => {
        setModalIsOpen(false);
    }

  
    const tabChangeHandler = (event, value) => {
        setValue(value);
      
    }


    const  loginClickHandler = () => {
        console.log(loginForm.username, loginForm.password);

        setLoginApiError("");
        if(loginForm.username === "" || loginForm.password === "") return;     

    
        let dataLogin = null;
        fetch(props.baseUrl + "auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                Authorization: "Basic " + window.btoa(loginForm.username + ":" + loginForm.password)

            },
            body: dataLogin,
        })
        .then(async(response) => {
            if(response.ok){
                sessionStorage.setItem("access-token",response.headers.get("access-token"));
                 return response.json();
        } else{
            let error = await response.json();
            setLoginApiError(error.message);
            throw new Error("Something Went Wrong");

        }
        })
        .then((data) => {
            sessionStorage.setItem("uuid", data.id);
            setLoggedIn(true);
            closeModalHandler();

        }).catch((error) => {
            console.log(error);
        });
    };
    
    const loginInputChangedHandler = (e) => {
        const state = loginForm;
        state[e.target.id] = e.target.value;

        setLoginForm({...state})
    }

    const registerInputChangedHandler = (e) => {
        const state = registerForm;
        console.log(e.target.name);
        console.log(e.target.id);

        state[e.target.id] = e.target.value;
        console.log(state);
        setRegisterForm({...state})
    }
    

    const  registerClickHandler = () => {


        let dataRegistered = JSON.stringify({
            email_address: registerForm.email,
            first_name: registerForm.firstname,
            last_name: registerForm.lastname,
            mobile_number:registerForm.contact,
            password: registerForm.password
        });
        console.log(dataRegistered);
        fetch(props.baseUrl + "signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                Authorization: "Basic" + window.btoa(loginForm.username + ":" + loginForm.password)

            },
            body: dataRegistered,
        }).then((data) => {setRegistrationSuccess(true)});


    }

    const logoutHandler = (e) => {
        sessionStorage.removeItem("uuid");
        sessionStorage.removeItem("access-token");
        console.log(' reached here');
        setLoggedIn(false);
    }


    return (
        <div>
            <header className="header">
                <img src={logo} className="logo" alt="Movies App Logo" />
                {!loggedIn ?
                    <div className="headerButton">
                        <Button variant="contained" color="default" onClick={openModalHandler}>
                            Login
                        </Button>
                    </div>
                    :
                    <div className="headerButton">
                        <Button variant="contained" color="default" onClick={logoutHandler}>
                            Logout
                        </Button>
                    </div>
                }
                {props.showBookShowButton === "true" && !loggedIn
                    ? <div className="bookshow-button">
                        <Button variant="contained" color="primary" onClick={openModalHandler}>
                            Book Show
                        </Button>
                    </div>
                    : ""
                }

                {props.showBookShowButton === "true" && loggedIn
                    ? <div className="bookshow-button">
                        <Link to={"/bookshow/" + props.id}>
                            <Button variant="contained" color="primary">
                                Book Show
                            </Button>
                        </Link>
                    </div>
                    : ""
                }

            </header>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                contentLabel="Login"
                onRequestClose={closeModalHandler}
                style={customStyles}
            >
                <Tabs className="tabs" value={value} onChange={tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>

                {value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={loginForm.username} onChange={loginInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="text" password={loginForm.password} onChange={loginInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        {loggedIn === true &&
                            <FormControl>
                                <span className="successText">
                                    Login Successful!
                                </span>
                            </FormControl>
                        }
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                }

                {value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={registerForm.firstname} onChange={registerInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={registerForm.lastname} onChange={registerInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" email={registerForm.email} onChange={registerInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="text" password={registerForm.password} onChange={registerInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="contact">Contact No.</InputLabel>
                            <Input id="contact" type="text" contact={registerForm.contact} onChange={registerInputChangedHandler} />
                        </FormControl>
                        <br /><br />
                        {registrationSuccess === true &&
                            <FormControl>
                                <span className="successText">
                                    Registration Successful. Please Login!
                                  </span>
                            </FormControl>
                        }
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                }
            </Modal>
        </div>
    )

}

export default Header;