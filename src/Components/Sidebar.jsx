import React, { useState } from "react";
import { DiAtom, DiBootstrap, DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { AiFillPlusCircle, AiFillMessage } from "react-icons/ai";
import { Avatar, AvatarGroup } from '@mui/material';
import { BiLogOut } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";


import "../Sidebar.css"

//MENU DESPLEGABLE START ------------------------------------------------
const Menu = () => (
    <div className="fixed -top-7 left-24 pl-4 pr-4 h-screen w-86 backdrop-blur-sm bg-segundo/60 shadow-md shadow-black/70 menu">
        <div>
            <div class="flex flex-row justify-items-start items-center mt-2">
                <div class="relative">
                    <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" class="ring-2 ring-gray-500 p-1 w-14 ml-5 mt-5 rounded-full shadow-xl" alt="Avatar" />
                    <span class="top-5 left-16 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>

                <div>
                    <p class=" text-white text-lg ml-4 font-thin">Yasser Sarghini</p>
                    <p class="text-gray-500 ml-4">my account</p>
                </div>
            </div>
            <hr class="mt-4 border border-solid border-gray-800" />
            <div class='max-w-md mx-auto'>
                <div class="ml-3 mt-3 relative flex items-center w-80 h-12 rounded-lg focus-within:shadow-lg bg-gray-700 overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        class="peer h-full w-full outline-none text-sm text-white pr-2 bg-gray-700"
                        type="text"
                        id="search"
                        placeholder="Search chat" />
                </div>

            </div>
            <div class="w-full">
                <div class="mt-5 flex flex-row w-100% items-center">
                    <p class="text-white text-xl font-bold">Online now</p>
                    <p class="ml-52 text-gray-500">More</p>
                </div>

            </div>
            <div class="mr-48 mt-3">
                <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </div>
            <p class="text-white font-bold text-xl mt-5">Rooms</p>

            <div class="flex flex-col items-start w-full">
                <div class="bg-transparent ring-2 ring-gray-500 mt-3 w-3/4 h-16 hover:scale-105 hover:ring-white hover:ring-1 transition-all rounded-md flex flex-row items-center">
                    <p class="text-white font-semibold text-xl ml-5">Ideas</p>
                    <div class="flex -space-x-4 ml-4">
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/18.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/19.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/20.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/21.webp" alt="" />
                    </div>
                </div>
                <div class="bg-transparent ring-2 ring-gray-500 mt-3 w-3/4 h-16 hover:scale-105  hover:ring-white hover:ring-1 transition-all rounded-md flex flex-row items-center">
                    <p class="text-white font-semibold text-xl ml-5">Design</p>
                    <div class="flex -space-x-4 ml-4">
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/6.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/7.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/8.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/9.webp" alt="" />
                    </div>
                </div>
                <div class="bg-transparent ring-2 ring-gray-500 mt-3 w-3/4 h-16 hover:scale-105  hover:ring-white hover:ring-1 transition-all rounded-md flex flex-row items-center">
                    <p class="text-white font-semibold text-xl ml-5">Devlopment</p>
                    <div class="flex -space-x-4 ml-4">
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/10.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/11.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/12.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/13.webp" alt="" />
                    </div>
                </div>
                <div class="bg-transparent ring-2 ring-gray-500 mt-3 w-3/4 h-16 hover:scale-105  hover:ring-white hover:ring-1 transition-all rounded-md flex flex-row items-center">
                    <p class="text-white font-semibold text-xl ml-5">Testing</p>
                    <div class="flex -space-x-4 ml-4">
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/14.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/15.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/16.webp" alt="" />
                        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://tecdn.b-cdn.net/img/new/avatars/17.webp" alt="" />
                    </div>
                </div>

            </div>
            <p className="text-white text-xl font-bold mt-7">Messages</p>
            <div class="mt-3">
                <div class="bg-transparent hover:scale-105 transition-all rounded-lg w-85% h-20 flex flex-row items-center hover:bg-black/20">
                    <div class="relative mb-5">
                        <img src="https://tecdn.b-cdn.net/img/new/avatars/1.webp" class="ring-2 ring-gray-500 p-1 w-14 ml-5 mt-5 rounded-full shadow-xl" alt="Avatar" />
                        <span class="top-5 left-16 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>                    <div>
                        <p class="text-white font-normal text-lg ml-4">Michael</p>
                        <p class="text-gray-500 font-normal text-sm ml-4">Hi, how u doing?</p>
                    </div>
                </div>
                <div class="bg-transparent hover:scale-105 transition-all rounded-lg w-85% h-20 flex flex-row items-center hover:bg-black/20">
                    <div class="relative mb-5">
                        <img src="https://tecdn.b-cdn.net/img/new/avatars/3.webp" class="ring-2 ring-gray-500 p-1 w-14 ml-5 mt-5 rounded-full shadow-xl" alt="Avatar" />
                        <span class="top-5 left-16 absolute  w-3.5 h-3.5 bg-gray-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>                     <div>
                        <p class="text-white font-normal text-lg ml-4">John</p>
                        <p class="text-gray-500 font-normal text-sm ml-4">Nice work</p>
                    </div>
                </div>
                <div class="bg-transparent hover:scale-105 transition-all rounded-lg w-85% h-20 flex flex-row items-center hover:bg-black/20">
                    <div class="relative mb-5">
                        <img src="https://tecdn.b-cdn.net/img/new/avatars/4.webp" class="ring-2 ring-gray-500 p-1 w-14 ml-5 mt-5 rounded-full shadow-xl" alt="Avatar" />
                        <span class="top-5 left-16 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>                     <div>
                        <p class="text-white font-normal text-lg ml-4">Karl</p>
                        <p class="text-gray-500 font-normal text-sm ml-4">Hi, how u doing?</p>
                    </div>
                </div>
                <div class="bg-transparent hover:scale-105 transition-all rounded-lg w-85% h-20 flex flex-row items-center hover:bg-black/20">
                    <div class="relative mb-5">
                        <img src="https://tecdn.b-cdn.net/img/new/avatars/5.webp" class="ring-2 ring-gray-500 p-1 w-14 ml-5 mt-5 rounded-full shadow-xl" alt="Avatar" />
                        <span class="top-5 left-16 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>                     <div>
                        <p class="text-white font-normal text-lg ml-4">Clarence</p>
                        <p class="text-gray-500 font-normal text-sm ml-4">Hi, how u doing?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
//MENU DESPLEGABLE END---------------------------------------------------

//SIDEBAR START---------------------------------------------------
const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-segundo text-segundo shadow-lg shadow-black">
            <div class="mt-4">
                <SidebarIcon text={'messages'} icon={< AiFillMessage size="28" />} onClick={handleMenuClick} />
                <SidebarIcon text={'New project'} icon={< AiFillPlusCircle size="28" />} />

            </div>
            <div class="h-screen mt-14 space-y-7">
                <SidebarIcon text={'Proyecto 1'} icon={< DiAtom size="28" />} />
                <SidebarIcon text={'Proyecto 1'} icon={< DiAtom size="28" />} />
                <SidebarIcon text={'Proyecto 2'} icon={< DiBootstrap size="28" />} />
                <SidebarIcon text={'Proyecto 3'} icon={< DiCss3 size="28" />} />
                <SidebarIcon text={'Proyecto 4'} icon={< DiHtml5 size="28" />} />
                <SidebarIcon text={'Proyecto 5'} icon={< DiJsBadge size="28" />} />
                <SidebarIcon text={'Proyecto 5'} icon={< DiJsBadge size="28" />} />
                {isMenuOpen && <Menu />}
            </div>
            <div class="mb-6">
            <SidebarIcon text={'messages'} icon={<FiUserPlus size="28" />}  />
            <SidebarIcon text={'messages'} icon={<BiLogOut size="28" />} />
            </div>

        </div>
    )
}
//SIDEBAR END--------------------------------------------


const SidebarIcon = ({ icon, text, onClick }) => (
    <div className="sidebar-icon group" onClick={onClick}>
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);



export default Sidebar;
