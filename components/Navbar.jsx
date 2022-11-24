/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24  mx-auto px-4  text-white">
        <img src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75" alt="" className="w-40" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home">Home</a>
          </li>
          <li className="p-4">
            <a href="#about">About</a>
          </li>
          <li className="p-4">
            <a href="#nations">Nations</a>
          </li>
          <li className="p-4">
            <a href="#groups">Groups</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className="w-full text-3xl font-bold">FIFA WORLD CUP.</h1>
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Nations</li>
          <li className="p-4">Groups</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
