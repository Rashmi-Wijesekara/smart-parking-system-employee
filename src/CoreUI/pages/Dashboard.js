import React, {useContext, useState, useEffect} from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import Table from "../../shared/Table/components/Table";
import ParkingSlotsCount from "../Components/ParkingSlotsCount";
import { AuthContext } from "../../shared/context/auth-context";

const employeeTitles = ["Data", "Time", "Vehicle", "In/Out"];

const Dashboard = () => {
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [id] = useState(auth.loginDetails.id);
    const [data, setData] = useState({});

    useEffect(() => {
        const sendReq = async () => {
            try{
                setIsLoading(true);
                const response = await fetch(`http://localhost:5000/api/parking-log/${id}`,{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }});
                const responseData = await response.json();
                if(responseData.status === "OK") {
                    const resu = await responseData.data;
                    let res = resu.map(item => {
                        return ({date: item.date, time: item.time, vehicleId: item.vehicleId, status: item.status});
                    });
                    console.log(res);
                    setData(res);
                } else {
                    console.log("Error");
                }
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        sendReq();
    }, [id]);

    if(isLoading) {
        return (
            <div>
                <h1>Looding...</h1>
            </div>
        );
    }

    return(
        <PageWrapper selected="d" isFloat={true}>
            <p className="my-5 font-main font-bold text-dove-gray">Parking Log</p>
            <div className="mx-2">
                <Table
                    titles={employeeTitles}
                    data={data}
                />
            </div>
            <ParkingSlotsCount />
        </PageWrapper>
    ); 
};

export default Dashboard;