import React from "react";

const Button = props => {
    return (
        <button type={props.type} className={`${props.size || "w-full"} ${props.color || "bg-cornflower-blue"} text-white p-1 rounded-xl`}>
            {props.title}
        </button>
    );
};

export default Button;