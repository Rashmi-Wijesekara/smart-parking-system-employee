import React from "react";
import { Link } from "react-router-dom";

const Button = props => {

    if(props.to) {
            return(
                <Link 
                    to={props.to}
                    exact={props.exact}
                    className={`${props.size || "w-full"} ${props.color || "bg-cornflower-blue"} text-white p-1 rounded-xl block ${props.className}`}
                >
                    {props.title}
                </Link>
            )
    }
    return (
        <button
            type={props.type} 
            className={`${props.size || "w-full"} ${props.color || "bg-cornflower-blue"} text-white p-1 rounded-xl ${props.className}`}
        >
            {props.title}
        </button>
    );
};

export default Button;