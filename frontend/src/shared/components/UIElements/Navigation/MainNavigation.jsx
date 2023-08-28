import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from "../Backdrop/Backdrop";

import './MainNavigation.css';



function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    function openDrawer(e){
        setDrawerIsOpen(true);
    }

    function closeDrawer(e){
        setDrawerIsOpen(false);
    }


    return (
        <>
            {drawerIsOpen && 
                <SideDrawer>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks/>
                    </nav>
                    <Backdrop onClick={closeDrawer}/>
                </SideDrawer>                
                }

            <MainHeader>
                <button onClick={(e) => {
                    setDrawerIsOpen(true)
                }}className="main-navigation__menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main-navigation__title">
                    <Link to={'/'}>Your Places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation;