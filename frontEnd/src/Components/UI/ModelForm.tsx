import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject, updateProject } from "../../API/APIServices";

type ModelType = {
  data: { title: string; project_id: string };
  update: boolean;
  userId?: number;
  h: string;
};

const ModelForm = ({ data, update, userId, h }: ModelType) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    setInput(data.title);
  }, [data]);
  //   call API For Create Projects here
  const ProjectHandler = async () => {
    if (!userId) return;
    if (input.trim() === "") return alert("plz fill");
    const res = await addProject(input, userId);
    if (res.data.error) return setErr(res.data.error);
    navigate(`/more/${res.data.project_id}`);
  };

  const ProjectUpdateHandler = () => {
    updateProject(data.project_id, input).then(() => {
      navigate(0);
    });
  };

  return (
    <div>
      <input type="checkbox" id={h} className="modal-toggle" />
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
          <p className="text-error w-full text-center pt-3"> {err}</p>
          <div className="modal-action">
            <label
              htmlFor={h}
              className="btn bg-red-500 hover:bg-red-400 text-white"
            >
              Close
            </label>
            {update ? (
              <label
                htmlFor={h}
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
