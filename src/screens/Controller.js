import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import DetailsPage from "./details/Details";
// import Home from "./home/Home";
// import Header from "../common/header/Header";
// import LoginDialog from "../common/loginDialog/LoginDialog";
// import ReactModal from "react-modal";
// import { useConfig } from "../config";
// import BookShow from "../screens/bookshow/BookShow";

// const customStyles = {
//     content: {
//         top: "50%",
//         left: "50%",
//         right: "auto",
//         bottom: "auto",
//         marginRight: "-50%",
//         transform: "translate(-50%, -50%)",
//     },
//     overlay: {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(255, 255, 255, 0.85)",
//     },
// };

// ReactModal.setAppElement(document.getElementById("root"));

// const Controller = () => {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);
//     const [showBooking, setShowBooking] = useState(false);
//     const config = useConfig();


//     const tryLogout = async () => {
//         try {
//             let myHeaders = new Headers();

//             myHeaders.append("Content-Type", "application/json");
//             myHeaders.append(
//                 "Authorization",
//                 "Bearer " + sessionStorage.getItem("access-token")
//             );

//             let response = await fetch(config.baseUrl + `/${config.logout}`, {
//                 method: "POST",
//                 headers: myHeaders,
//             });
//             if (response.ok) return true;
//         } catch (e) {
//             console.log(e);
//         }
//         return false;
//     };

//     const loginClicked = (value) => (event) => {
//         if (value === false) {
//             if (tryLogout()) setLoggedIn(false);
//         } else {
//             setShowLogin(true);
//         }
//     };

//     const bookShowClicked = (value) => (event) => {
//         if (loggedIn) {
//             setShowBooking(false);
//             setShowLogin(true);
//         } else {
//             setShowBooking(true);
//             setShowLogin(false);
//         }
//     };

//     const closeModal = () => {
//         setShowLogin(false);
//     };

    

//     const DisplayModal = (
      
//                 <ReactModal
//                     isOpen={showLogin}
//                     //onAfterOpen={afterOpenModal}
//                     onRequestClose={closeModal}
//                     style={customStyles}
//                     contentLabel="Example Modal"
//                     shouldCloseOnOverlayClick={true}
//                 >
//                     <LoginDialog
//                         onLogin={() => {
//                             setShowLogin(false);
//                             setLoggedIn(true);
//                         }}
//                     />
//                 </ReactModal>
//     );


//     const DetailsDisplayModal = (props) => (
//         <React.Fragment>
//                 <DetailsPage {...props} />
//                 {DisplayModal}
//         </React.Fragment>
//     )

//     return (
//         <Router>
//             <div>
//                 <Switch>
//                     <Route
//                         path="/movie"
//                         render={(props) => (
//                             <React.Fragment>
//                                 <Header
//                                     {...props}
//                                     loggedIn={loggedIn}
//                                     loginClicked={loginClicked}
//                                     bookShow={!showBooking}
//                                     bookClicked={bookShowClicked}
//                                 />
                                
//                                 { showBooking === true ? <BookShow {...props} /> :  DetailsDisplayModal(props) }
//                             </React.Fragment>
//                         )}
//                     />
//                     <Route
//                         path="/book"
//                         render={(props) => (
//                             <React.Fragment>
//                                 <Header
//                                     {...props}
//                                     loggedIn={loggedIn}
//                                     loginClicked={loginClicked}
//                                     bookShow={false}
//                                 />
//                                 <BookShow {...props} />
//                             </React.Fragment>
//                         )}
//                     />
//                     <Route
//                         path="/"
//                         exact
//                         render={(props) => (
//                             <React.Fragment>
//                                 <Header
//                                     {...props}
//                                     bookShow={false}
//                                     loggedIn={loggedIn}
//                                     loginClicked={loginClicked}
//                                     bookClicked={bookShowClicked}
//                                 />
//                                 <Home {...props} />
//                                 {DisplayModal}
//                             </React.Fragment>
//                         )}
//                     />
//                 </Switch>
//             </div>
//         </Router>
//     );
// };

const Controller = function(){
    return(
        <div>
            React Project
        </div>
    )
}

export default Controller;