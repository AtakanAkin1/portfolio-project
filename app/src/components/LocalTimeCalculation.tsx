import React, { useEffect, useState } from "react";

const LocalTimeCalculation = () => {
    const [localTime, setLocalTime] = useState<string>("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const h = now.getHours().toString().padStart(2, "0");
            const m = now.getMinutes().toString().padStart(2, "0");
            setLocalTime(`${h}:${m}`);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <span className="color-eff1c5 orbitron fs-14">Local Time ~ </span>
            <span className="orbitronBold fs-14">{localTime}</span>
        </div>
    );
};

export default LocalTimeCalculation;
