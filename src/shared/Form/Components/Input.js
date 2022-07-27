/* this return input field with the lable
    properties
        id, displayName, type, labelColor, color, className

*/

import React from "react";

const Input = props => {
    return (
        <div className={`text-left ${props.className || "mb-2"}`}>
            <label 
                htmlFor={props.id}
                className={`${props.labelColor || "text-dove-gray"} text-sm leading-8`}
            >
                {props.displayName}
            </label>

            <input 
                id={props.id} 
                type={props.type} 
                className={`w-full ${props.color || "bg-neutral-100"} rounded-xl h-7 px-2`}
            />
        </div>
    );
};

export default Input;