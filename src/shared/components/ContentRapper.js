import React from "react";

const ContentRapper = (props) => {
    return (
        <div className="text-center relative w-full h-full-nav shadow-wrapper rounded-2xl mx-3">
            {props.children}
        </div>
    );
}

export default ContentRapper;