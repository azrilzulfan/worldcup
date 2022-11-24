/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const About = () => {
  return (
    <>
      <div className="bg-primary flex justify-center">
        <p id="about" className="bg-white w-[500px] rounded-md font-medium my-6 mx-auto py-3 text-2xl text-primary text-center">
          About
        </p>
      </div>
      <div className="w-full bg-primary text-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75" alt="/" />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Now is All</h1>
            <p>
              The 2022 FIFA World Cup is an international association football tournament contested by the men's national teams of FIFA's member associations, and the 22nd FIFA World Cup. The event is taking place in Qatar from 20 November
              to 18 December 2022.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
