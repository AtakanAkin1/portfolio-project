import React from 'react';

const About:React.FC = () => {
    return (
        <div className={"text-center -mt-30"}>
            <span className={"orbitronBold fs-64 "}>About</span>
            <p className="orbitron max-w-6xl mx-auto fs-22 leading-relaxed color-eff1c5">
                Hello, I’m Atakan Akin — a passionate full-stack developer who loves turning ideas into scalable and elegant web solutions.
                I began my journey by studying Information Technologies in high school and earned a degree in Computer Programming from Afyon Kocatepe University.
                Currently, I specialize in building modern web applications using .NET Core, JavaScript, React.js, and Next.js.
                I strive to create seamless digital experiences that are not only functional, but also user-focused and performance-driven.
            </p>
        </div>
    );
};

export default About;
