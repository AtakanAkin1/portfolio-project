"use client";
import React from 'react';
import { GoDotFill } from "react-icons/go";
import styles from '@/styles/homepage.module.css';

const Home: React.FC = () =>  {
  return (
      <div className="flex flex-col items-center justify-start min-h-[40vh] w-full">
          <div className="text-left">
              <span className="orbitron fs-48 block">
                  Hi, I am
              </span>
              <span className="orbitronBold fs-64 block pl-28">{/* padding left 7vh */}
                  Atakan Akın
              </span>
              <div className={"flex items-center gap-5 mt-5"}>
                  <span className={"titillium fs-24 color-eff1c5"}>Fullstack Developer</span>
                  <GoDotFill className={"color-eff1c5"}/>
                  <span className={"titillium fs-24 color-eff1c5"}>.NET Core & React</span>
              </div>
          </div>
          <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${styles.backgroundPointer}`}
          />
      </div>
  );
}

export default Home;
