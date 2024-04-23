import TodoItem from "./TodoItem";
// import { IoSettings } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import ModelForm from "./ModelForm";
import ModelAddTodo from "../ModelAddTodo";
import { useEffect, useState } from "react";
import { deleteProject, detailProject, getTodos } from "../../API/APIServices";
import { useNavigate } from "react-router-dom";
import { createGist } from "../../Gist/Gist";

const TodoDetailCard = ({ project_id }: { project_id: string }) => {
  const [data, setData] = useState<any>({});
  const [todoData, setTodoData] = useState([]);
  const [checkedLength, setCheckedLength] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    detailProject(project_id).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    getTodos().then((res) => {
      setTodoData(
        res.data.filter((t: any) => t.project.project_id == project_id)
      );
    });
  }, []);

  useEffect(() => {
    const ch = todoData.filter((c: any) => c.completion_status === true).length;
    setCheckedLength(ch);
  }, [todoData]);

  const GistHandler = () => {
    const fileName = `${data.title}.md`;
    // console.log(fileName);

    const fileContent = `
# ${data.title}

- Summary ${checkedLength}/${todoData.length} todos completed

## Pending Tasks
${todoData
  .filter((c: any) => c.completion_status === false)
  .map((item: any) => `- [ ] ${item.heading}`)}



## Completed Task
${todoData
  .filter((c: any) => c.completion_status === true)
  .map((item: any) => `- [x] ${item.heading}`)}
`;

    const accessToken = "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";

    createGist(fileName, fileContent, accessToken)
      .then((gistUrl: any) => {
        // console.log("Gist URL:", gistUrl);
        confirm(`Your Gist is Ready, Check Link ${gistUrl}`);
      })
      .catch((error: any) => {
        console.log("Error:", error.message);
      });
  };

  return (
    <div className="w-full flex justify-center items-center pb-10 ">
      <div className="bg-base-100 w-full rounded-lg p-8 max-sm:p-5">
        {/* Head Section */}
        <div className="flex md:justify-between mb-5 items-center max-sm:flex-wrap">
          <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
            <h1 className="text-3xl font-semibold ">{data.title}</h1>
            <div className="flex gap-3">
              <label className="" htmlFor="my_modal_6">
                <FaRegEdit className="text-2xl text-blue-500 cursor-pointer" />
              </label>
              <MdOutlineDelete
                className="text-2xl text-red-500 cursor-pointer"
                onClick={async () => {
                  if (confirm("are u sure ?")) {
                    await deleteProject(project_id);
                    navigate("/home");
                  }
                }}
              />
            </div>

            {/* Update Button  */}
            <ModelForm data={data} update={true} h="my_modal_6" />
          </div>
          <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-around max-sm:mt-5">
            <label
              htmlFor="my_modal_7"
              className="btn bg-blue-500 text-white hover:bg-blue-400 max-sm:btn-sm"
            >
              Add New Todo
            </label>
            <ModelAddTodo
              add={true}
              h="my_modal_7"
              title=""
              desc=""
              todo_id=""
              checked={false}
              project_id={project_id}
            />

            <h1
              className="btn bg-blue-500 text-white hover:bg-blue-400 max-sm:btn-sm"
              onClick={() => GistHandler()}
            >
              Save as gist
            </h1>
          </div>
        </div>
        {todoData.length !== 0 ? (
          <div className="mb-10 max-sm:w-full text-center">
            <p>
              <span className="font-bold">Summary</span> : {checkedLength}/
              {todoData.length} todos completed
            </p>
          </div>
        ) : null}
        {/* Body */}
        {todoData.length === 0 ? (
          <div className="w-full flex justify-center items-center h-[10rem]">
            <p className="text-4xl font-semibold ">No Todos!</p>
          </div>
        ) : null}
        {todoData.map((item, index) => {
          return (
            <TodoItem
              data={item}
              key={index}
              setCheckedLength={setCheckedLength}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoDetailCard;
