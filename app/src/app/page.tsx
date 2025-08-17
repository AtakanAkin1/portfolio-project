"use client";
import React from 'react';
import { GoDotFill } from "react-icons/go";

const Home: React.FC = () =>  {
  return (
      <div className="flex flex-col items-center justify-start min-h-[40vh] w-full">
          <div className="sm:text-left text-center">
              <span className="orbitron fs-48 block">
                  Hi, I am
              </span>
              <span className="orbitronBold fs-64 block sm:pl-28">{/* padding left 7vh */}
                  Atakan Akın
              </span>
              <div className={"flex items-center gap-5 mt-5"}>
                  <span className={"titillium fs-24 color-eff1c5"}>Fullstack Developer</span>
                  <GoDotFill className={"color-eff1c5"}/>
                  <span className={"titillium fs-24 color-eff1c5"}>.NET Core & React.js</span>
              </div>
          </div>

      </div>
  );
}

export default Home;
