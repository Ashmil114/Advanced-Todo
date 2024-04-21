import { useEffect, useState } from "react";

type ModelAdd = {
  title: string;
  desc: string;
  add: boolean;
  h: string;
};

const ModelAddTodo = ({ title, desc, add, h }: ModelAdd) => {
  const [Ttitle, setTitle] = useState("");
  const [Tdesc, setDesc] = useState("");

  useEffect(() => {
    setTitle(title);
    setDesc(desc);
  }, []);

  const AddHandler = () => {
    console.log("Add");
  };

  const UpdateHandler = () => {
    console.log(Ttitle, Tdesc);

    console.log("Update");
  };

  return (
    <div>
      <input type="checkbox" id={h} className="modal-toggle" />
      <div className="modal w-full" role="dialog">
        <div className="modal-box w-full">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={Ttitle}
              placeholder="Type Todo Title here"
              className="input input-bordered w-full focus:outline-none focus:border-slate-400 border-slate-200"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              placeholder="Type Todo Description here"
              value={Tdesc}
              className="input input-bordered w-full px-4 py-2 focus:outline-none focus:border-slate-400 border-slate-200"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor={h}
              className="btn bg-red-500 hover:bg-red-400 text-white"
            >
              Close
            </label>
            {add ? (
              <label
                htmlFor={h}
                className="btn bg-blue-500 hover:bg-blue-400 text-white"
                onClick={() => AddHandler()}
              >
                Add
              </label>
            ) : (
              <label
                htmlFor={h}
                className="btn bg-blue-500 hover:bg-blue-400 text-white"
                onClick={() => UpdateHandler()}
              >
                Update
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAddTodo;
