import SideList from "./SideList";
import ModelForm from "./UI/ModelForm";
import ProjectCard from "./UI/ProjectCard";
import { MdAddCircle } from "react-icons/md";

export const ProjectList = () => {
  return (
    <div className="dy-container py-10 lg:flex gap-10">
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
          <a
            href=""
            data-tip="create new project"
            className="tooltip tooltip-primary text-white "
          >
            <MdAddCircle className="text-blue-500 text-4xl" />
          </a>
        </div>
        <SideList />
      </div>
      {/* Card List */}
      <div className="lg:w-[75%]">
        <div>
          <h1 className="title">Recently Added</h1>
          <div className=" grid md:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 md:grid-col-2 md:grid-rows-2 gap-5 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        <div>
          <h1 className="title">Completed</h1>
          <div className=" grid md:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 md:grid-col-2 md:grid-rows-2 gap-5 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};
