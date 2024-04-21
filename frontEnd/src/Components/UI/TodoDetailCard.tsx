import TodoItem from "./TodoItem";
// import { IoSettings } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import ModelForm from "./ModelForm";
import ModelAddTodo from "../ModelAddTodo";

const TodoDetailCard = () => {
  return (
    <div className="w-full flex justify-center items-center pb-10">
      <div className="bg-base-100 w-full rounded-lg p-8 max-sm:p-5">
        {/* Head Section */}
        <div className="flex md:justify-between mb-5 items-center max-sm:flex-wrap">
          <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
            <h1 className="text-3xl font-semibold ">Project 1</h1>
            <div className="flex gap-3">
              <label className="" htmlFor="my_modal_6">
                <FaRegEdit className="text-2xl text-blue-500 cursor-pointer" />
              </label>
              <MdOutlineDelete className="text-2xl text-red-500 cursor-pointer" />
            </div>

            {/* Update Button  */}
            <ModelForm data="data" update={true} />
          </div>
          <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-around max-sm:mt-5">
            {/* <h1 className="btn bg-blue-500 text-white hover:bg-blue-400 max-sm:btn-sm">
              Add New Todo
            </h1> */}
            <label
              htmlFor="my_modal_7"
              className="btn bg-blue-500 text-white hover:bg-blue-400 max-sm:btn-sm"
            >
              Add New Todo
            </label>
            <ModelAddTodo title="" desc="" add={true} h="my_modal_7" />

            <h1 className="btn bg-blue-500 text-white hover:bg-blue-400 max-sm:btn-sm">
              Save as gist
            </h1>
          </div>
        </div>
        <div className="mb-10 max-sm:w-full text-center">
          <p>
            <span className="font-bold">Summary</span> : 2/10 todos completed
          </p>
        </div>
        {/* Body */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoDetailCard;
