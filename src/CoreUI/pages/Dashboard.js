import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import Table from "../../shared/Table/components/Table";
import ParkingSlotsCount from "../Components/ParkingSlotsCount";

const employeeTitles = ["Data", "Time", "Vehicle", "In/Out"];
const employeeData = [
        {
            date: "2022/08/09", 
            time: "09.43pm",
            vehicleId: "V0001",
            status: "In"
        },
        {
            date: "2022/08/09", 
            time: "09.43pm",
            vehicleId: "V0001",
            status: "In"
        },
        {
            date: "2022/08/09", 
            time: "09.43pm",
            vehicleId: "V0001",
            status: "In"
        }
    ];

const Dashboard = () => {
    return(
        <PageWrapper selected="d">
            <p className="my-5 font-main font-bold text-dove-gray">Parking Log</p>
            <div className="mx-2">
                <Table
                    titles={employeeTitles}
                    data={employeeData}
                />
            </div>
            <ParkingSlotsCount />
        </PageWrapper>
    ); 
};

export default Dashboard;