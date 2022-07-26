import React from "react";

const ImageArea = props => {
    return (
        <div>
            <img src={props.src} alt={props.alt} className={props.className} />
        </div>
    );
};

export default ImageArea;