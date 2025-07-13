import React from 'react';

const About:React.FC = () => {
    return (
        <div className={"text-center -mt-30"}>
            <span className={"orbitronBold fs-64 "}>About</span>
            <p className="orbitron max-w-6xl mx-auto fs-22 leading-relaxed color-eff1c5">
                Hello, I am Atakan Akin.
                I graduated from the Department of information technologiesin high school and completed
                my undergraduate education in Computer Programming at Afyon Kocatepe University.
                I am currently working as a full-stack software developer.
                In addition to .NET CORE, I have expertise in JavaScript, React.js, and Next.js.
            </p>
        </div>
    );
};

export default About;
