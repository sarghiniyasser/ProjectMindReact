import React, { useState } from "react";
import { DiAtom, DiBootstrap, DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { AiFillPlusCircle } from "react-icons/ai";
import "../Sidebar.css"

const Sidebar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-primero text-segundo">
            <SidebarIcon text={'Proyecto 1'} icon={< DiAtom size="28"/>} onClick={handleMenuClick} />
            {/* <div style={{width: '30px', height: '2px', borderRadius: '5px', background: 'blue', marginLeft: '26%'}}></div> */}
            <SidebarIcon text={'Proyecto 2'} icon={< DiBootstrap size="28"/>} onClick={handleMenuClick} />
            <SidebarIcon text={'Proyecto 3'} icon={< DiCss3 size="28"/>} onClick={handleMenuClick} />
            <SidebarIcon text={'Proyecto 4'} icon={< DiHtml5 size="28"/>} onClick={handleMenuClick} />
            <SidebarIcon text={'Proyecto 5'} icon={< DiJsBadge size="28"/>} onClick={handleMenuClick} />
            <SidebarIcon text={'New project'} icon={< AiFillPlusCircle size="28"/>} onClick={handleMenuClick} />
            {isMenuOpen && <Menu />}
        </div>
    )
}

const SidebarIcon = ({icon, text, onClick}) => (
    <div className="sidebar-icon group" onClick={onClick}>
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Menu = () => (
    <div className="fixed top-0 left-24 h-screen w-96 bg-primero z-10 menu">
        <div>
            
        </div>
    </div>
);

export default Sidebar;
