import { useState } from "react";

export default function TabsComponent() {
    const [openTab, setOpenTab] = useState(1);


    return (
        <div>
            <div className="container mx-auto mt-12">
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <ul className="flex space-x-2">
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                            >
                                React Tabs 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}


                            >
                                React Tabs 2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(3)}
                                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}


                            >
                                React Tabs 3
                            </a>
                        </li>
                    </ul>
                    <div className="p-3 mt-6 bg-white border">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                            React JS with Tailwind CSS Tab 1 Content show
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 2 Content show
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 3 Content show
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}