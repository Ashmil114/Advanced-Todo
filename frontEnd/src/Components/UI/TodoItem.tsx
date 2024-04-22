import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import ModelAddTodo from "../ModelAddTodo";
import { deleteTodo, updateTodo } from "../../API/APIServices";
import { useNavigate } from "react-router-dom";
import { format, formatDistance } from "date-fns";

const TodoItem = ({
  data,
  setCheckedLength,
}: {
  data: any;
  setCheckedLength: (value: React.SetStateAction<number>) => void;
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    setChecked(data.completion_status);
  }, []);
  return (
    <div className="flex lg:justify-between md:mx-10 my-5 items-center max-md:flex-wrap">
      <div className="lg:w-[80%] flex gap-5  items-start ">
        <input
          type="checkbox"
          className=" h-10 w-10 "
          checked={checked}
          onChange={async () => {
            updateTodo(
              data.todo_id,
              !checked,
              data.heading,
              data.description
            ).then(() => {
              setChecked(!checked);
              setCheckedLength((prev) => {
                if (!checked) return prev + 1;
                else return prev - 1;
              });
            });
          }}
        />
        <div className="flex flex-col gap-2">
          <h1
            className={`font-medium text-lg max-sm:text-xl text-slate-800 ${
              checked ? "line-through" : null
            }`}
          >
            {data.heading}
          </h1>
          <p
            className={`text-[14px] text-slate-600 max-sm:text-justify max-sm:text-xs ${
              checked ? "line-through" : null
            }`}
          >
            {data.description}
          </p>
          <p
            className={`text-[14px] text-slate-700 ${
              checked ? "line-through" : null
            }`}
          >
            <span className="font-semibold">created </span> :{" "}
            {format(data.created_date, "dd-MM-yyyy")}{" "}
          </p>
          <p
            className={`text-[14px] text-slate-700 ${
              checked ? "line-through" : null
            }`}
          >
            <span className="font-semibold">updated </span> :
            {formatDistance(data.created_date, new Date())}
          </p>
        </div>
      </div>
      {!checked ? (
        <div className="flex gap-5  max-sm:w-full max-sm:justify-end">
          <label htmlFor={data.todo_id} className="">
            <FaRegEdit className="text-2xl text-green-500 cursor-pointer" />
          </label>
          <MdOutlineDelete
            className="text-2xl text-red-500 cursor-pointer"
            onClick={() => {
              if (confirm("are u sure ?")) {
                deleteTodo(data.todo_id);
                navigate(0);
              }
            }}
          />
          {/* Update Button */}
          <ModelAddTodo
            title={data.heading}
            desc={data.description}
            todo_id={data.todo_id}
            checked={checked}
            add={false}
            h={data.todo_id}
            project_id=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoItem;
