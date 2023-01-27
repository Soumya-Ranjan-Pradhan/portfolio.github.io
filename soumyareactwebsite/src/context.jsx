// Create a Context
// Provider
// consumer / useContext

import React, { useContext, useReducer } from "react";
import reducer from "./reduce"
const AppContext = React.createContext();

const intialState = {
    name:"",
    image:"",
}

const AppProvider = ({ children}) =>{
 const [state, dispatch] = useReducer(reducer, intialState)

 const updateHome = () =>{
    return dispatch(
        {
            type: "HOME_UPDATE",
            payload:{
                name:"Soumya",
                image:"./images/hero-svg.jpeg",
                profile:"I'am Soumya Ranjan Pradhan.A Fronted Developer",
            },   
        });
           };

const updateAboutPage = () =>{
    return dispatch(
        {
            type: "ABOUT_UPDATE",
            payload:{
                name:"My About",
                Bio:"My name is Soumya Ranjan Pradhan I'am from Angul I completed my HSE( higher secondary education)from Hi tech +2 Science College in 2018 with an 45% , And I have Completed my SSC (Secondary School Certification) From Angul High School in 2016 with an 57%, And have Completed my Graduation in Bca (Bachelor Of Computer Application) From Niis Collage in 2021 with 70% . At present I'am pursuing Mca (Master Of Computer Application) From College Of engineering Bhubaneswar.My strength is my confidence. My weakness is easily trusting ",
                image:"./images/about-svg.jpg",
            },   
        });
};

return <AppContext.Provider value={{...state,updateHome,updateAboutPage}}>
    {children}
</AppContext.Provider>
}

// Global custom hook
const useGlobaalContext = () =>{
    return useContext(AppContext)
}

export { AppContext,AppProvider,useGlobaalContext };