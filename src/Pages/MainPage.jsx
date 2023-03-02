import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Toolsbar from "../Components/Toolsbar";
import Chatbox from "../Components/Chatbox";

const MainPage = () => {
  return (
    <div className="flex bg-gradient-to-t from-gray-600 via-gray-700 to-gray-900 w-screen h-screen">

      <div className="w-20 m-0 p-0">
        <Sidebar />
      </div>
      <div class="left-1/4 ml-7 w-full fixed">
        <Chatbox />
      </div>
      <div class="w-full">
        <Toolsbar />
      </div>
      

    </div>
  )
}


export default MainPage;//ffrfr