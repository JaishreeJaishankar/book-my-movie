import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactModal from "react-modal";

import Home from "./home/Home";
import Details from './details/Details';
import BookShow from './bookshow/BookShow';
import Confirmation from './confirmation/Confirmation';
import Header from '../common/header/Header';

const Controller = () => {

    const baseUrl = "/api/v1/";


    return(

        <Router>
            <div className="controller">
                <Route exact path="/" render = {(props) => <Home {...props} baseUrl = {baseUrl} />} />
                <Route exact path="/movie/:id" render = {(props) => <Details {...props} baseUrl = {baseUrl} />} />
                <Route exact path="/bookshow/:id" render = {(props) => <BookShow {...props} baseUrl = {baseUrl} />} />
                <Route exact path="/confirm/:id" render = {(props) => <Confirmation {...props} baseUrl = {baseUrl} />} />
            </div>
        </Router>

    );
}

export default Controller;

// const apiConfig = {
//       baseUrl: "http://localhost:8085/api/v1",    
//       movies : "movies",
//       genres : "genres",
//       artists : "artists",
//       login : "auth/login",
//       logout : "auth/logout",
//       register : "signup"
//   };

// console.log(apiConfig.baseUrl +'/'+ apiConfig.logout)
// const Controller = () =>{
    
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);
//     const [showBooking, setShowBooking] = useState(false);

//     const isLoggedOut = async() =>{
//         try{
//             let url = apiConfig.baseUrl + `/${apiConfig.logout}`;
//             let response = await fetch(url,{
//                 method: "POST",
//                 headers: {
//                     "Content-Type" : "application/json",
//                     "Authorization" : "Bearer " + sessionStorage.getItem("access-token")
//                 }
//             });
//             if (response.ok) 
//                 return true;
//         }catch(error){
//             console.log(error);
//         }
//         return false;
//     };

//     const onLoginClicked = (value) => (event) =>{
//         if (value === false) {
//             if (isLoggedOut()) setLoggedIn(false);
//         } else {
//             setShowLogin(true);
//         }
//     };

//     const onBookShowClicked = (value) => (event) => {
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

//     const DisplayLoginModal = (
      
//         <ReactModal isOpen={showLogin}
//             onRequestClose={closeModal}
//             shouldCloseOnOverlayClick={true}>
//             <registerLoginController
//                 onLogin={() => {
//                     setShowLogin(false);
//                     setLoggedIn(true);
//                 }}
//             />
//         </ReactModal>
//     );


//     // return(
//     //     <div>
//     //        <Header 
//     //             {...props}
//     //             loggedIn={loggedIn}
//     //             loginClicked={onLoginClicked}
//     //             bookShow={!showBooking}
//     //             bookClicked={onBookShowClicked}/>
//     //     </div>
//     // )
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
//                                     loginClicked={onLoginClicked}
//                                     bookShow={!showBooking}
//                                     bookClicked={onBookShowClicked}
//                                 />
                                
//                                 {/* { showBooking === true ? <BookShow {...props} /> :  DetailsDisplayModal(props) } */}
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
//                                     loginClicked={onLoginClicked}
//                                     bookShow={false}
//                                 />
//                                 {/* <BookShow {...props} /> */}
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
//                                     loginClicked={onLoginClicked}
//                                     bookClicked={onBookShowClicked}
//                                 />
//                                 <Home {...props} />
//                                 {DisplayLoginModal}
//                             </React.Fragment>
//                         )}
//                     />
//                 </Switch>
//             </div>
//         </Router>
//     );
// };



// export default Controller;

