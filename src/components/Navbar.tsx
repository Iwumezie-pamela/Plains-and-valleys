import React, { useState } from 'react';
import logo from '../Images/navWhite.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'Home' },
    {
      id: 2,
      path: '/property',
      text: 'Properties',
    },
    {
      id: 3,
      path: '/service',
      text: 'Services',
    },
    {
      id: 4,
      path: '/about',
      text: 'About',
    },
    {
      id: 5,
      path: '/contact',
      text: 'Contact',
    },
  ];

  return (
    <header className=''>
      <nav className='flex items-center justify-between py-6 max-w-7xl mx-auto px-3'>
        <img
          src={logo}
          alt='company logo'
          className='w-[230.49px]  lg:w-[307.49px] lg:h-[40px]'
        />
        <div className='hidden md:flex  gap-4 lg:gap-8 uppercase font-medium'>
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <NavLink
                to={path}
                key={id}
                className={({ isActive }) => {
                  return isActive
                    ? 'text-[#E3A335] tracking-[0.02em] text-base'
                    : 'tracking-[0.02em] text-base text-[#FFFBF5]';
                }}
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <div className='border border-[#7A7A7A]'></div>
    </header>
  );
};

export default Navbar;
