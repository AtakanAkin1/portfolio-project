import React, {useEffect, useState} from 'react';
import {clearInterval} from "node:timers";

const LocalTimeCalculation = () => {
    const [localTime, setLocalTime] = useState<string>("");
    useEffect(() => {
        const timer = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString("tr-TR"));
        },1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <span className={"color-eff1c5 orbitron fs-14"}>Local Time ~ </span>
            <span className={"orbitronBold fs-14"}>{localTime}</span>
        </div>
    );
};

export default LocalTimeCalculation;