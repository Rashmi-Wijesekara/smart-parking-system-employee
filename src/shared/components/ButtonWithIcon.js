import React from "react";
import { Link } from "react-router-dom";

const ButtonWithIcon = (props) => {
    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={`{props.size || "w-full"} ${props.color || "bg-cornflower-blue"} text-white p-1 rounded-xl ${props.className}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={props.d} />
            </svg>
            {props.children}
        </Link>
    )
};

export default ButtonWithIcon;