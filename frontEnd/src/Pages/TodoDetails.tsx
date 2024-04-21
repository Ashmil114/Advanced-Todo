import { useNavigate } from "react-router-dom";
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
  return (
    <div className="">
      <NavBar name="ashmil" />
      <div className="dy-container ">
        <BreadCrumbs />
        <TodoDetailCard />
      </div>
    </div>
  );
};

export default TodoDetails;
