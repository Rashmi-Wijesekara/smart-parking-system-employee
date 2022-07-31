import { useCallback, useReducer } from "react";

const formReduser = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValied = true;
            for (const inputId in state.inputs) {
                if (inputId === action.id) {
                    formIsValied = formIsValied && action.isValid;
                } else {
                    formIsValied = formIsValied && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.id]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValied
            };
        default:
            return state;
    }
}

export const useForm = (initialInputs, initialFormValidity) => {

    const [inputState, dispatch] = useReducer(formReduser, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            id: id,
            value : value,
            isValid : isValid
        });
    }, []);

    return [inputState, inputHandler];

};