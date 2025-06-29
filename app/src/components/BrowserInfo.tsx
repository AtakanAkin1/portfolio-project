"use client";
import { UAParser } from 'ua-parser-js';
import React, { useEffect, useState } from "react";

interface IUserAgent{
    browser: {
        name?: string;
        version?: string;
    },
    os:{
        name?: string;
        version?: string;
    }
}

const BrowserInfo: React.FC = () => {
    const [userAgent, setUserAgent] = useState<IUserAgent>({
        browser: {
            name: "",
            version: ""
        },
        os:{
            name: "",
            version: ""
        }
    });
    useEffect(() => {
        const parser = new UAParser;
        const result: IUserAgent  = parser.getResult();
        debugger;
        setUserAgent(result);
    },[]);

    return(
        <div>
            <div>
                <span className={"orbitronBold fs-14"}>{userAgent.browser.name} {userAgent.browser.version}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ Browser</span>
            </div>
            <div>
                <span className={"orbitronBold fs-14"}>{userAgent.os.name}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ OS</span>
            </div>
        </div>
    );
};

export default BrowserInfo;