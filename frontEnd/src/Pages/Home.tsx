import { useCookies } from "react-cookie";
import { ProjectList } from "../Components/ProjectList";
import NavBar from "../Components/Shared/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [token] = useCookies(["my-token"]);

  useEffect(() => {
    if (!token["my-token"]) {
      navigate(`/`);
    }
  }, [token]);
  let data = {
    username: "",
    user_id: Number(),
  };
  if (localStorage.getItem("res"))
    data = JSON.parse(localStorage.getItem("res") || "");

  return (
    <div className="  ">
      <NavBar name={data.username} />
      <ProjectList userId={data.user_id} />
    </div>
  );
};

export default Home;
