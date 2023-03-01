import React from "react";
import Sidebar from "../Components/Sidebar";
import Sidemenu from "../Components/Sidemenu";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const MainPage = () => {
    return (
        <div className=" bg-gray-700 flex flex-row gap-0">
        <div className="w-20 m-0 p-0">
          <Sidebar />
        </div>
        
      </div>
    )
}


export default MainPage;