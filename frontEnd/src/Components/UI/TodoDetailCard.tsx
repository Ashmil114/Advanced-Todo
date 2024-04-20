import TodoItem from "./TodoItem";
// import { IoSettings } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const TodoDetailCard = () => {
  return (
    <div className="w-full flex justify-center items-center pb-10">
      <div className="bg-base-100 w-full rounded-lg p-8 max-sm:p-5">
        {/* Head Section */}
        <div className="flex justify-between mb-5 items-center">
          <div className="flex items-center gap-5">
            <h1 className="text-3xl font-semibold ">Project 1</h1>
            <div className="flex gap-3">
              <FaRegEdit className="text-2xl text-blue-500 cursor-pointer" />
              <MdOutlineDelete className="text-2xl text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="btn bg-blue-500 text-white hover:bg-blue-400">
              Add New Todo
            </h1>
            <h1 className="btn bg-blue-500 text-white hover:bg-blue-400">
              Save as gist
            </h1>
          </div>
        </div>
        <div className="mb-10">
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
