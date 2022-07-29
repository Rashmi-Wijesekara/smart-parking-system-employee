import React from "react";

import PakingSlot from "./PakingSlot";
import { ReactComponent as Slots1 } from "../../shared/images/icons/slots1.svg";
import { ReactComponent as Slots2 } from "../../shared/images/icons/slots2.svg";
import { ReactComponent as Slots3 } from "../../shared/images/icons/slots3.svg";

const ParkingSlotsCount = () => {
	return (
		<div className="font-main mt-5 w-fit mx-auto">
			<div className="w-40 text-lg mb-5 font-bold text-textGrey text-center mx-auto">
				Priking Slots
			</div>
            <PakingSlot 
                title="Available Slots"
                count="45"
            >
                <Slots1 className="h-14" />
            </PakingSlot>
            <PakingSlot 
                title="Filled Slots"
                count="45"
            >
                <Slots2 className="h-14"/>
            </PakingSlot>
            <PakingSlot 
                title="Total Slots"
                count="75"
            >
                <Slots3 className="h-14" />
            </PakingSlot>
		</div>
	);
}

export default ParkingSlotsCount;