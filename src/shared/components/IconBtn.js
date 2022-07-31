import React from "react";
import { NavLink } from "react-router-dom";

const IconBtn = (props) => {
    return (
        <NavLink to={props.to}>
            <div className="flex my-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-navy-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={props.d} />
                </svg>
                <span className="text-main text-mine-shaft">{props.label}</span>
            </div>
        </NavLink>
    );
};

export default IconBtn;