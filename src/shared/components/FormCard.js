/*
    this is used to wrap the form element
    properties - children
*/

import React from "react";

const FormCard = props => {
    return (
        <div className="p-4 bg-white rounded-xl max-w-sm mx-auto">
            {props.children}
        </div>
    );
};

export default FormCard;