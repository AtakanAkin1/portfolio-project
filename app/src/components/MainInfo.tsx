"use client"
import React, {PropsWithChildren, useEffect, useState} from 'react';
import LocationInfo from "@/components/LocationInfo";
import BrowserInfo from "@/components/BrowserInfo";
import LocationCountryInfo from "@/components/LocationCountryInfo";
import axios from "axios";
import LocalTimeCalculation from "@/components/LocalTimeCalculation";
import TimeSpent from "@/components/TimeSpent";

export interface ILocationInfo {
    ip: string;
    country_capital: string;
    country_name: string;
    latitude: string;
    longitude: string;
}
const MainInfo = ({ children }: PropsWithChildren<{}>) => {
    const [location, setLocation] = useState<ILocationInfo>({
        ip: "",
        country_capital: "",
        country_name: "",
        latitude: "",
        longitude: "",
    });
    useEffect(() => {
        axios.get("https://ipapi.co/json/")
            .then((response) => {
                setLocation(response.data as ILocationInfo);
            })
            .catch(()=>{
                setLocation({
                    ip: "-",
                    latitude: "-",
                    longitude: "-",
                    country_name: "-",
                    country_capital: "-"
                });
            });
    }, []);
    return (
        <div className={"flex-1 p-5 flex flex-col justify-between"}>
            <div className="flex items-center justify-between">
                <LocationInfo {...location}/>
                <BrowserInfo/>
            </div>
            {children}
            <div className="flex justify-between">
                <div className={"flex flex-col items-start justify-items-start"}>
                    <LocalTimeCalculation/>
                    <TimeSpent/>
                </div>
                <LocationCountryInfo {...location}/>
            </div>
        </div>
    );
};

export default MainInfo;