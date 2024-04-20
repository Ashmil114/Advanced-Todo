import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const TodoItem = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="flex lg:justify-between md:mx-10 my-5 items-center max-md:flex-wrap">
      <div className="lg:w-[80%] flex gap-5  items-start ">
        <input
          type="checkbox"
          className=" h-10 w-10 "
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`font-medium text-lg max-sm:text-xl text-slate-800 ${
              checked ? "line-through" : null
            }`}
          >
            Todo Example One
          </h1>
          <p
            className={`text-[14px] text-slate-600 max-sm:text-justify max-sm:text-xs ${
              checked ? "line-through" : null
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            mollitia tempora debitis dolorum laudantium corrupti, repudiandae
            perspiciatis et impedit unde perferendis ab hic, ullam odit corporis
            qui quod omnis architecto!
          </p>
          <p className="text-[14px] text-slate-700">Today</p>
        </div>
      </div>
      <div className="flex gap-5  max-sm:w-full max-sm:justify-end">
        <FaRegEdit className="text-2xl text-green-500 cursor-pointer" />
        <MdOutlineDelete className="text-2xl text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TodoItem;
