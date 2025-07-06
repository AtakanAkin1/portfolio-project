"use client"
import React from 'react';
import {ILocationInfo} from "@/components/MainInfo";

const LocationCountryInfo = (props: ILocationInfo) => {
    return (
        <div>
            <div className={"text-end"}>
                <span className={"orbitronBold fs-14"}>{props.ip}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ IP</span>
            </div>
            <div>
                <span className={"orbitronBold fs-14"}>{props.country_name}, {props.country_capital}</span>
                <span className={"color-eff1c5 orbitron fs-14"}> ~ Location</span>
            </div>
        </div>
    );
};

export default LocationCountryInfo;