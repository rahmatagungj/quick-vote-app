import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";

const Information = ({ auth, errors }) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Information
                </h2>
            }
        >
            <Head title="Information - Quick Vote App" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Officia blanditiis cum
                                molestiae quae animi quaerat quos suscipit atque
                                ad facilis, assumenda, fugit molestias, deserunt
                                laborum. Laudantium aliquam animi cupiditate
                                temporibus.
                            </p>
                            <p className="my-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Officia blanditiis cum
                                molestiae quae animi quaerat quos suscipit atque
                                ad facilis, assumenda, fugit molestias, deserunt
                                laborum. Laudantium aliquam animi cupiditate
                                temporibus.
                            </p>
                            <p className="my-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Officia blanditiis cum
                                molestiae quae animi quaerat quos suscipit atque
                                ad facilis, assumenda, fugit molestias, deserunt
                                laborum. Laudantium aliquam animi cupiditate
                                temporibus.
                            </p>
                            <p className="my-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Officia blanditiis cum
                                molestiae quae animi quaerat quos suscipit atque
                                ad facilis, assumenda, fugit molestias, deserunt
                                laborum. Laudantium aliquam animi cupiditate
                                temporibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Information;
