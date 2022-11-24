import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-neutral-400 font-bold p-2">Feel The Moments of Winning</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase">Fifa World Cup</h1>
        <div className="flex justify-center items-center ">
          {' '}
          <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" strings={['Qatar 2022']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-neutral-400">Now is All</p>
        <button className="bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
