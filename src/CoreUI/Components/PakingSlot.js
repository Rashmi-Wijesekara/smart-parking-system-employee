import React from "react";

const PakingSlot = (props) => {
    return (
        <div className="bg-white max-w-xs shadow-lg rounded-xl p-1 my-1">
			<div className="flex flex-row">
				<div className="py-1 px-4 grow">
					<div className="text-navbarTextGrey font-semibold text-sxm">
						{props.title}
					</div>
					<div className="font-bold text-xl">{props.count}</div>
				</div>
				<div className="">
					{props.children}
				</div>
			</div>
		</div>
    );
};

export default PakingSlot;