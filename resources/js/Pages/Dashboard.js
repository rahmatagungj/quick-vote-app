import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import VoteTab from "@/Components/VoteTab";
import Alert from "@/Components/Alert";

export default function Dashboard(props) {
    const [isSuccess, setIsSuccess] = React.useState(false);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard - Quick Vote App" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isSuccess && (
                        <Alert color="green">
                            Successfully voted
                        </Alert>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <VoteTab
                                color="gray"
                                props={props}
                                setIsSuccess={setIsSuccess}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
