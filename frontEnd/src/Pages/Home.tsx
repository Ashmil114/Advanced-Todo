import { useCookies } from "react-cookie";
import { ProjectList } from "../Components/ProjectList";
import NavBar from "../Components/Shared/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [token] = useCookies(["my-token"]);

  useEffect(() => {
    if (!token["my-token"]) {
      navigate(`/`);
    }
  }, [token]);
  const location = useLocation();

  // console.log(location.state[0]);

  return (
    <div className="  ">
      <NavBar name={location.state?.[1]} />
      <ProjectList userId={location.state?.[0]} />
    </div>
  );
};

export default Home;
