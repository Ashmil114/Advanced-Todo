import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import BreadCrumbs from "../Components/UI/BreadCrumbs";
import TodoDetailCard from "../Components/UI/TodoDetailCard";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const TodoDetails = () => {
  const navigate = useNavigate();
  const [token] = useCookies(["my-token"]);

  useEffect(() => {
    if (!token["my-token"]) {
      navigate(`/`);
    }
  }, [token]);

  const { id: project_id } = useParams();
  let data = {
    username: "",
  };
  if (localStorage.getItem("res"))
    data = JSON.parse(localStorage.getItem("res") || "");

  if (!project_id) return;
  return (
    <div className="">
      <NavBar name={data.username} />
      <div className="dy-container min-h-screen">
        <BreadCrumbs />
        <TodoDetailCard project_id={project_id} />
      </div>
    </div>
  );
};

export default TodoDetails;
