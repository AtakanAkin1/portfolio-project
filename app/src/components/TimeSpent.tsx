import React, {useEffect, useState} from 'react';

const TimeSpent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const time =  setInterval(() => {
            setSeconds((s) => s+1)
        },1000);
        return () => clearInterval(time);
    }, []);

    const minutes = Math.floor(seconds / 60);
    const remSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remSeconds.toString().padStart(2, '0');
    return (
        <div>
            <span className={"color-eff1c5 orbitron fs-14"}>Time Spend ~ </span>
            <span className={"orbitronBold fs-14"}>{formattedMinutes}:{formattedSeconds}</span>
        </div>
    );
};

export default TimeSpent;
