import React from "react";
import Sidebar from "../Components/Sidebar";
import Sidemenu from "../Components/Sidemenu";

const MainPage = () =>{
    return(
        <div  className="bg-gray-400 w-screen h-screen flex flex-row">
            <Sidebar /> 
            <Sidemenu />
        </div>
       
    )
}


export default MainPage;