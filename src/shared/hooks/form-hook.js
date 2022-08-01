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
        case "SET_DATA":
            return ({
                inputs: action.inputs,
                isValid: action.formValidity
            });
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

    const setUseFormData = useCallback((initialValue, initialFormValidity) => {
        dispatch({
            type: "SET_DATA",
            inputs: initialValue,
            formValidity: initialFormValidity
        });
    }, []);

    return [inputState, inputHandler, setUseFormData];

};