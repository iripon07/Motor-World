import React from "react";
import bg from "../../images/bg/rm309-adj-03.jpg";
import img from "../../images/12.jpg";
import 'animate.css';

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="m-10 import ">
        <div class="max-w-screen-lg mx-auto animate__animated animate__bounce">
            <h1 className="text-6xl font-extrabold text-red-900 text-center uppercase my-6">About</h1>
          <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-10">
            <img src={img} class="rounded-lg shadow-2xl h-[350px]" alt="" />
            <div>
              <h1 class="text-5xl font-bold uppercase text-yellow-500 xs:text-2xl">
                Know About Us
              </h1>
              <p class="">
                Bikes made custom for one person only, you! Unrivaled ride
                quality. Handmade in the USA. Each bike is custom built made
                specifically for you. Order the bike you deserve. Ride Quality
                Defined. Limited builds in 2022. Order your dream bike.
                <br />
                In April 2012, Volkswagen Group's Audi subsidiary announced its intention to buy Ducati for €860 million (US$1.2 billion). Volkswagen chairman Ferdinand Piëch, a motorcycle enthusiast, had long coveted Ducati, and had regretted that he passed up an opportunity to buy the company from the Italian government in 1984
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
