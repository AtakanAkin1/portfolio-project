"use client"
import React from 'react';
import {ILocationInfo} from "@/components/MainInfo";

const LocationInfo = (props: ILocationInfo) => {

    return (
        <div>
            <div>
                <span className={"color-eff1c5 orbitron fs-14"}>longitude ~ </span>
                <span className={"orbitronBold fs-14"}>{props.longitude}</span>
            </div>
            <div>
                <span className={"color-eff1c5 orbitron fs-14"}>latitude ~ </span>
                <span className={"orbitronBold fs-14"}>{props.latitude}</span>
            </div>
        </div>
    );
};

export default LocationInfo;