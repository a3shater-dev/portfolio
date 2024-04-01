"use client"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
export default function About() {
    const dataList = [{
        name: "Education",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elessitatibus, ipsum repudiandae harum, quia, assumenda quos facilis mollitia? Voluptates obcaecati inventore repellendus modi. Et, facilis minima."
    },
    {
        name: "Education",
        description: "a, assumenda quos facilis mollitia? Voluptates obcaecati inventore repellendus modi. Et, facilis minima."
    }]
    function handleClick(e: any) {
        const ele = e.currentTarget;
        if (ele.classList.contains("active")) {
            ele.classList.remove("active");
            ele.classList.add("deactive")
            ele.classList.remove("ring-offset-2")
            ele.classList.remove("ring-2")
        }
        else {
            ele.classList.remove("deactive");
            ele.classList.add("active")
            ele.classList.add("ring-offset-2")
            ele.classList.add("ring-2")
        }
    }
    return (
        <div id="about" className="bg-black text-white p-2">
            <div className="max-w-6xl mx-auto py-14">
                <div>
                    <h3 className="text-3xl font-bold mb-5">About Me</h3>
                    <p className="mb-7 text-gray-400">Hello I&#x2019;m Ahmed, Full-Stack web developer with different technologies like Laravel, React, Nextjs, Tailwindcss, bootstrap 5, etc...</p>
                </div>
                <div>
                    <h2 className="text-2xl mb-5">More</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {
                            dataList.map((ele) => {
                                return (
                                    <div key={ele.name} className="group h-44 border rounded p-3 transition-all select-none cursor-pointer flex flex-col sm:gap-2 gap-1" onClick={handleClick}>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="uppercase">{ele.name}</p>
                                            </div>
                                            <div >
                                                <FaAngleDown className="hidden group-[.active]:block" />
                                                <FaAngleUp className="block group-[.active]:hidden" />
                                            </div>
                                        </div>
                                        <div className="invisible group-[.active]:visible text-gray-400">
                                            <p>{ele.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}