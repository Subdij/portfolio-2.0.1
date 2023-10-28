"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title:'About',
        path: '#about',
    },
    {
        title:'Projects',
        path: '#Projects',
    },
    {
        title:'Contact',
        path: '#Contact',
    }
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top top-0 left-0 right-0 zz-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href='/'className='text-2xl md:text-5xl text-white font-semibold'>
            𝙎𝙪𝙗𝙙𝙞𝙟
            </Link>
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'></Bars3Icon>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'></XMarkIcon>
                        </button>
                    )}
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link,index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}></NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}></MenuOverlay> : null}
    </nav>
  )
}

export default Navbar;
