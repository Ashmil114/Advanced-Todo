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
      setData(res.data.filter((d: any) => d.owner.id == userId));
    });
  }, []);

  return (
    <div className="dy-container min-h-screen py-10 lg:flex gap-10">
      {/* Side List */}
      <div className="lg:w-[25%] h-fit  p-6 rounded-lg card  bg-base-100 shadow-xl">
        <div className="w-full flex justify-end mb-5 items-center gap-2">
          <label
            className="btn bg-blue-500 text-white hover:bg-blue-400"
            htmlFor="my_modal_10"
          >
            New Project
          </label>
          {/* Project Add Button */}
          <ModelForm
            data={{ project_id: "", title: "" }}
            update={false}
            userId={userId}
            h="my_modal_10"
          />
          <label
            htmlFor="my_modal_10"
            data-tip="create new project"
            className="tooltip tooltip-primary text-white "
          >
            <MdAddCircle className="text-blue-500 text-4xl" />
          </label>
        </div>
        <SideList userId={userId} />
      </div>
      {/* Card List */}
      <div className="lg:w-[75%] ">
        <div>
          {data.length !== 0 ? <h1 className="title">Projects</h1> : null}
          <div className=" flex flex-wrap gap-5 lg:justify-start justify-center ">
            {data.length === 0 ? (
              <div className="w-full flex flex-col justify-center items-center h-[20rem]">
                <p className="text-2xl font-semibold">No Project !</p>
                <p className="text-sm text-slate-400">Add Projects</p>
              </div>
            ) : null}
            {data.map((item, index) => (
              <ProjectCard
                key={index + 10}
                title={item.title}
                created_date={item.created_date}
                project_id={item.project_id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
