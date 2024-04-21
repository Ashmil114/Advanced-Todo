import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ModelType = {
  data: string;
  update: boolean;
};

const ModelForm = ({ data, update }: ModelType) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(data);
  }, []);
  //   call API For Create Projects here
  const ProjectHandler = () => {
    console.log(input);
    setInput("");
    navigate("more/1");
  };

  const ProjectUpdateHandler = () => {
    console.log(input);
    setInput(input);
    navigate("");
  };

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box ">
          <label className="form-control w-full ">
            <input
              type="text"
              placeholder="Type Your Project Name"
              className="input  w-full focus:outline-none focus:border-slate-400 border-slate-300"
              value={input}
              required
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </label>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn bg-red-500 hover:bg-red-400 text-white"
            >
              Close
            </label>
            {update ? (
              <label
                htmlFor="my_modal_6"
                className="btn bg-blue-500 hover:bg-blue-400 text-white"
                onClick={() => {
                  ProjectUpdateHandler();
                }}
              >
                Update
              </label>
            ) : (
              <button
                className="btn bg-blue-500 hover:bg-blue-400 text-white"
                onClick={() => {
                  ProjectHandler();
                }}
              >
                Create
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelForm;
