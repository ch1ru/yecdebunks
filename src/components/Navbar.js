import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuButton from './MenuButton';
import Switch from './Switch';
import { IoMoon, IoSunny } from "react-icons/io5"
import { useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();


  return (
    <nav className='NavbarItems flex bg-slate-900 justify-between p-6 text-white fixed w-screen px-6 shadow-2xl z-10'>
        <h1>YEC Stories</h1>
        <ul className='flex gap-6'>
            <li>
                <MenuButton to='/' active={location.pathname == '/'}>Home</MenuButton>
            </li>
            <li>
                <MenuButton to='/articles' active={location.pathname.includes('/articles')}>Articles</MenuButton>
            </li>
            <li>
                <MenuButton to='/hebrewstudy' active={location.pathname == '/hebrewstudy'}>Hebrew Study</MenuButton>
            </li>
        </ul>
        <div className='flex content-center text-center items-center'>
            <IoSunny />
            <Switch />
            <IoMoon />
        </div>
        
    </nav>
  )
}

export default Navbar