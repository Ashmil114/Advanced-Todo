import { useEffect, useState } from "react";
import SideList from "./SideList";
import ModelForm from "./UI/ModelForm";
import ProjectCard from "./UI/ProjectCard";
import { MdAddCircle } from "react-icons/md";
import { getProject } from "../API/APIServices";

export const ProjectList = ({ userId }: { userId: number }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getProject().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="dy-container min-h-screen py-10 lg:flex gap-10">
      {/* Side List */}
      <div className="lg:w-[25%] h-fit  p-6 rounded-lg card  bg-base-100 shadow-xl">
        <div className="w-full flex justify-end mb-5 items-center gap-2">
          <label
            className="btn bg-blue-500 text-white hover:bg-blue-400"
            htmlFor="my_modal_6"
          >
            New Project
          </label>
          {/* Project Add Button */}
          <ModelForm data="" update={false} />
          <label
            htmlFor="my_modal_6"
            data-tip="create new project"
            className="tooltip tooltip-primary text-white "
          >
            <MdAddCircle className="text-blue-500 text-4xl" />
          </label>
        </div>
        <SideList userId={userId} />
      </div>
      {/* Card List */}
      <div className="lg:w-[75%]">
        <div>
          <h1 className="title">Recently Added</h1>
          <div className=" grid md:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 md:grid-col-2 md:grid-rows-2 gap-5 ">
            {data
              .filter((d) => d.owner.id == userId)
              .map((item, index) => (
                <>
                  <ProjectCard
                    key={index + 10}
                    title={item.title}
                    created_date={item.created_date}
                  />
                </>
              ))}
          </div>
        </div>

        <div>
          <h1 className="title">Completed</h1>
          <div className=" grid md:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 md:grid-col-2 md:grid-rows-2 gap-5 ">
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
