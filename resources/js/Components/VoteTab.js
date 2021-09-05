import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Button from "./Button";

const VoteTab = ({ color, props,setIsSuccess }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const { setData, post, processing} = useForm({
        email: props.auth.user.email,
            name: props.auth.user.name,
        vote_to: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("vote.store"),{
            preserveScroll: true,
            onSuccess: () => setIsSuccess(true),
        });
    };

    React.useEffect(() => {
        setData({
            email: props.auth.user.email,
            name: props.auth.user.name,
            vote_to: openTab,
        });
    }, [openTab]);

    const RenderCandidate = ({
        candidateName,
        candidateImage,
        visiMisi,
        candidateNumber,
        candidatePersonName,
    }) => {
        return (
            <section>
                <div className="lg:flex lg:max-w-5xl py-3">
                    <div className="lg:w-2/5">
                        <div
                            className="h-80 bg-cover bg-no-repeat bg-center rounded h-100"
                            style={{
                                backgroundImage: `url(${candidateImage})`,
                            }}
                        />
                    </div>
                    <div className="max-w-xl px-6 py-10 lg:py-0 lg:max-w-5xl lg:w-1/2 relative">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                            {candidatePersonName}
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            {visiMisi}
                        </p>
                        <form onSubmit={submit}>
                            <input
                                type="hidden"
                                name="vote_to"
                                value={candidateNumber}
                            />
                            <div className="mt-10">
                                <Button processing={processing}>Chose {candidateName}</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Candidate 1
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Candidate 2
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? "block" : "hidden"
                                    }
                                    id="link1"
                                >
                                    <RenderCandidate
                                        candidateName="Candidate 1"
                                        candidateImage="https://avatars.githubusercontent.com/u/30583918?v=4"
                                        visiMisi="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum quia quidem, omnis deserunt perspiciatis beatae nulla obcaecati temporibus placeat vero consectetur enim numquam qui eveniet esse illum quis nesciunt."
                                        candidateNumber={1}
                                        candidatePersonName="Rahmat & Agung"
                                    />
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? "block" : "hidden"
                                    }
                                    id="link2"
                                >
                                    <RenderCandidate
                                        candidateName="Candidate 2"
                                        candidateImage="https://avatars.githubusercontent.com/u/30583918?v=4"
                                        visiMisi="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum quia quidem, omnis deserunt perspiciatis beatae nulla obcaecati temporibus placeat vero consectetur enim numquam qui eveniet esse illum quis nesciunt."
                                        candidateNumber={2}
                                        candidatePersonName="Julians & Rahmat"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoteTab;
