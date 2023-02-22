import React from "react";
import { DiAtom, DiBootstrap, DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import { AiFillPlusCircle } from "react-icons/ai";
const Sidebar = () =>{
    return(
        <div className="fixed top 0 left-0 h-screen 
         w-16 m-0 flex flex-col bg-primero text-segundo
         shadow-lg">
            <SidebarIcon text={'Proyecto 1'} icon={< DiAtom size="28"/>} />
            <div style={{width: '30px', height: '2px', borderRadius: '5px', background: 'blue', marginLeft: '26%'}}></div>
            <SidebarIcon text={'Proyecto 2'} icon={< DiBootstrap size="28"/>} />
            <SidebarIcon text={'Proyecto 3'} icon={< DiCss3 size="28"/>} />
            <SidebarIcon text={'Proyecto 4'} icon={< DiHtml5 size="28"/>} />
            <SidebarIcon text={'Proyecto 5'} icon={< DiJsBadge size="28"/>} />
            <SidebarIcon text={'New project'} icon={< AiFillPlusCircle size="28"/>} />
        </div>
    )
}

const SidebarIcon = ({icon, text}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Sidebar;