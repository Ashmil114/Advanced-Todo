import TodoItem from "./TodoItem";
import { IoSettings } from "react-icons/io5";

const TodoDetailCard = () => {
  return (
    <div className="w-full flex justify-center items-center pb-10">
      <div className="bg-base-100 w-full rounded-lg p-8 max-sm:p-5">
        {/* Head Section */}
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-3xl font-semibold ">Project 1</h1>
          <div className="flex items-center gap-3">
            <h1 className="btn bg-blue-500 text-white hover:bg-blue-400">
              Add New Todo
            </h1>
            <h1 className="btn bg-blue-500 text-white hover:bg-blue-400">
              Save as gist
            </h1>
            <span
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip="more options "
            >
              <IoSettings className="text-4xl cursor-pointer text-slate-700  " />
            </span>
          </div>
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
