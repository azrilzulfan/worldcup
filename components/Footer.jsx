import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-white">FIFA WORLD CUP.</h1>
        <p className="py-4">
          <span>© 2022 Copyright. </span>
          azrilzulfan
        </p>
        <div className="flex gap-2 md:w-[75%] my-6">
          <Link href={'https://www.youtube.com/channel/UCtx1jwPJh8D4r_L1Ie7xN5w'} target={'_blank'}>
            <FaYoutube size={30} />
          </Link>
          <Link href={'https://www.instagram.com/azrilzulfan/'} target={'_blank'}>
            <FaInstagram size={30} />
          </Link>
          <Link href={'https://github.com/azrilzulfan'} target={'_blank'}>
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2 flex gap-44 mt-6">
        <div>
          <h6 className="font-medium text-gray-400">About</h6>
          <ul>
            <li className="py-2 text-sm">The 2022 FIFA World Cup</li>
            <li className="py-2 text-sm">Qatar 2022</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Nations</h6>
          <ul>
            <li className="py-2 text-sm">AFC</li>
            <li className="py-2 text-sm">CAF</li>
            <li className="py-2 text-sm">CONCACAF</li>
            <li className="py-2 text-sm">CONMEBOL</li>
            <li className="py-2 text-sm">UEFA</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Groups</h6>
          <ul>
            <li className="py-2 text-sm">Group A,B</li>
            <li className="py-2 text-sm">Group C,D</li>
            <li className="py-2 text-sm">Group E,F</li>
            <li className="py-2 text-sm">Group G,H</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
