"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
export default function About() {
  const dataList = [
    {
      name: "Tqdum web app",
      description:
        "A web application that enables educational and developmental institutions to manage and organize the registration process for training programs, which goes through several stages including interviews, exams, and file uploads, streamlines operations and makes management easier amidst high application volumes. The system comprises a homepage for displaying details about the institution and specific training programs, as well as a dedicated admin dashboard for system administrators, and separate dashboards for interviewers, file reviewers, and applicants.",
      url: "https://github.com/a3shater/tqdum",
    },
    {
      name: "Attendance System Api",
      description:
        "An API interface for an attendance and leave management system, which oversees and monitors employees' attendance and leave, calculates attendance days, and generates reports. The interface provides core functionalities for both the mobile and web applications of the system. The system was developed as part of a graduation project team, and my role was the backend developer.",
      url: "https://github.com/a3shater/Attendance-System-Api",
    },
    {
      name: "Blog with Social Media",
      description:
        "The web application is a blog for sharing and managing posts. It allows you to share, edit, delete posts, and display them to visitors. Additionally, the application enables you to publish your post directly to your Facebook and Instagram pages through platform testing for the platform you want to share the post on. The post becomes available on the application and on the pages you have selected.",
      url: "https://github.com/a3shater/my-blog-with-social-posts-project",
    },
  ];
  function handleClick(e: any) {
    const ele = e.currentTarget;
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
      ele.classList.add("deactive");
      ele.classList.remove("ring-offset-2");
      ele.classList.remove("ring-2");
    } else {
      ele.classList.remove("deactive");
      ele.classList.add("active");
      ele.classList.add("ring-offset-2");
      ele.classList.add("ring-2");
    }
  }
  return (
    <div id="about" className="bg-black text-white p-2">
      <div className="max-w-6xl mx-auto py-14">
        <div>
          <h3 className="text-3xl font-bold mb-5">About Me</h3>
          <p className="mb-7 text-gray-400">
            Hello I&#x2019;m Ahmed, Full-Stack web developer with different
            technologies like Laravel, React, Nextjs, Tailwindcss, bootstrap 5,
            etc...
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-5">
            Projects
            <span className="relative text-sm  ml-3 cursor-pointer text-gray-400 group">
              ( Double click
              <FaExternalLinkAlt className="inline mx-1" />)
              <span className="group-hover:inline text-black hidden bg-white rounded-sm absolute w-[200px] text-center -top-7 left-0 opacity-90 ">
                {" "}
                source code | project live
              </span>
            </span>
          </h2>
          <div className="space-y-5 ">
            {dataList.map((ele) => {
              return (
                <div
                  key={ele.name}
                  className="group border min-h-24 rounded p-3 transition-all select-none cursor-pointer flex flex-col sm:gap-2 gap-1"
                  onClick={handleClick}
                  onDoubleClick={() => {
                    window.open(ele.url);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="uppercase">{ele.name}</p>
                    </div>
                    <div>
                      <FaAngleDown className="hidden group-[.active]:block" />
                      <FaAngleUp className="block group-[.active]:hidden" />
                    </div>
                  </div>
                  <div className="hidden group-[.active]:block text-gray-400">
                    <p>{ele.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
