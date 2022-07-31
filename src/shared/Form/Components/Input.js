/* this return input field with the lable
    properties
        id, displayName, type, labelColor, color, className

*/

import React, { useEffect, useReducer } from "react";
import {validate} from "../../util/validators";

const inputReduser = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return (
                {
                    ...state,
                    value: action.value,
                    isValid: validate(action.value, action.validators)
                }
            );
        case "TOUCHED":
            return (
                {
                    ...state,
                    isTouched: true
                }
            );
        default:
            return state;
    }
}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReduser, {
                                        value: props.value || "",
                                        isValid: false,
                                        isTouched: props.isValied || false
                                    });

    const changeHandler = event => {
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validators: props.validators
        });
    };

    const onClickHandler = () => {
        dispatch({
            type: "TOUCHED"
        });
    };

    const { onInput, id } = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    },
    [onInput, id, value, isValid]);

    return (
        <div className={`text-left ${props.className || "mb-2"}`}>
            <label 
                htmlFor={props.id}
                className={`${props.labelColor || "text-dove-gray"} text-sxm leading-8 font-second`}
            >
                {props.displayName}
            </label>

            <input 
                id={props.id} 
                type={props.type} 
                className={`w-full ${props.color || "bg-neutral-100"} rounded-xl h-7 px-2 py-3 font-second border-2 ${props.inputClass} ${!inputState.isValid && inputState.isTouched && "border-rose-500 bg-cosmos"}`}
                onChange={changeHandler}
                onBlur={onClickHandler}
                value={inputState.value}
            />

            {!inputState.isValid && inputState.isTouched && <p className="text-ssx text-red-500">{props.errorText}</p>}
        </div>
    );
};

export default Input;