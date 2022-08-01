import React, {useState} from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import FormCard from "../../shared/components/FormCard";
import Input from "../../shared/Form/Components/Input";
import Button from "../../shared/Form/Components/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const RemoveVehicle = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [inputState, inputHandler , setUseFormData] = useForm({
        userId: {
            value: "",
            isValid: false
        },
        vehicleID: {
            value: "",
            isValid: false
        }
    }, false);

    const removeVehicle = async event => {
        event.preventDefault();
        
        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/api/employee/${inputState.inputs.userId.value}/vehicles/remove`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    vehicleId: inputState.inputs.vehicleID.value
                })
            });

            const responseData = await response.json();
            
            setIsLoading(false);
            if(responseData.status === "OK") {
                await setUseFormData({
                    userId: {
                        value: "",
                        isValid: false
                    },
                    vehicleID: {
                        value: "",
                        isValid: false
                    }
                }, false);
                console.log("vehicle Removed");
            } else {
                console.log("Error occoured");
            }
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    };

    if (isLoading) {
        return (
            <div>
                <h1>Is lodding....</h1>
            </div>
        )
    }

    return (
        <PageWrapper
            selected="p"
            wrapperClasses="flex flex-col pt-8 px-4"
        >
            <FormCard className="rounded-lg mt-10 w-full">
                <div className="font-main text-sxm mb-6 font-semibold">Add Vehicle Details to Remove</div>
                <form onSubmit={removeVehicle}>
                    <Input
                        id="userId"
                        type="text" 
                        displayName="User ID"
                        color="bg-alto"
                        inputClass="rounded-lg"
                        errorText="Pleace Enter Valid User ID"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Input
                        id="vehicleID"
                        type="text" 
                        displayName="Vehicle ID"
                        color="bg-alto"
                        inputClass="rounded-lg"
                        errorText="Pleace Enter Valid Vehicle ID"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                    />
                    <Button 
                        type="submit"
                        title="Remove Vehicle"
                        className="mt-6 rounded-lg"
                        isDisabled={!inputState.isValid}
                    />
                </form>
            </FormCard>
        </PageWrapper>
    );
};

export default RemoveVehicle;