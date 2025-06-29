"use client"
import React,{useEffect, useState} from 'react';
import  axios from "axios";

interface ILocationInfo {
    ip: string;
    country_capital: string;
    country_name: string;
    latitude: string;
    longitude: string;
}

const LocationInfo: React.FC = () => {
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
        <div>
            <div>
                <span className={"color-eff1c5 orbitron fs-14"}>longitude ~ </span>
                <span className={"orbitronBold fs-14"}>{location.longitude}</span>
            </div>
            <div>
                <span className={"color-eff1c5 orbitron fs-14"}>latitude ~ </span>
                <span className={"orbitronBold fs-14"}>{location.latitude}</span>
            </div>
            <div>
                <span className={"orbitronBold fs-14"}>{location.ip}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ IP</span>
            </div>
            <div>
                <span className={"orbitronBold fs-14"}>{location.country_name}, {location.country_capital}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ Location</span>
            </div>
        </div>
    );
};

export default LocationInfo;