import React from "react";
import { NavLink } from "react-router-dom";

// this icons reserve from https://heroicons.com/

const NavItem = (props) => {
    return (
        <NavLink to={`${props.to || "/dashboard"}`}>
            <div className={`rounded-lg h-full w-16 relative flex flex-col items-center justify-center p-1 ${props.isSelected && "shadow-inners"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={props.d} />
                </svg>
                <span className="text-ssx text-white">{props.title}</span>
            </div>
        </NavLink>
    );
};

export default NavItem;