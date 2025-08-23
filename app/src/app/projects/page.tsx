import React from 'react';
import DeveloperAnimation from "@/components/animation/DeveloperAnimation";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-[40vh] w-full">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 p-4">
                <div className="flex justify-center items-center mb-6 md:mb-0 mb:mr-5">
                    <DeveloperAnimation />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-4 max-w-xl text-center md:text-left">
                    <div>
                        <div className="orbitronBold text-2xl md:text-3xl pb-2">Asset Management</div>
                        <span className="orbitron text-base md:text-lg color-eff1c5 mb-2 md:mb-5 inline-block" style={{ maxWidth: '600px' }}>
                          I developed an application for managing workplace assets in factories, offices, and companies.<br/>
                          It records departments, employees, and the assets assigned to them (e.g., phones, laptops, keyboards), enabling businesses to track asset usage in an organized and transparent way.<br/>
                          The goal is to improve efficiency and control in asset management.
                        </span>
                    </div>

                    <Link
                        href={process.env.NEXT_PUBLIC_ASSET_MANAGEMENT_GITHUB_REPO ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="orbitronBold text-sm md:text-base w-36 border-b pb-1 flex items-center gap-2 justify-center md:justify-start">
                            View Project
                            <GoArrowRight className="text-lg"/>
                        </div>
                    </Link>

                    {/* Tech Use */}
                    <div className="orbitronBold text-sm md:text-base  text-center md:text-left md:pt-7 mbd:pb-3">Tech Use :</div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <div className="orbitronBold text-sm md:text-base border border-[#EFF1C5] flex items-center gap-2 color-eff1c5 px-3 py-1 rounded-lg">.NET Core</div>
                        <div className="orbitronBold text-sm md:text-base border border-[#EFF1C5] flex items-center gap-2 color-eff1c5 px-3 py-1 rounded-lg">Microsoft SQL Server</div>
                        <div className="orbitronBold text-sm md:text-base border border-[#EFF1C5] flex items-center gap-2 color-eff1c5 px-3 py-1 rounded-lg">Razor Pages</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
