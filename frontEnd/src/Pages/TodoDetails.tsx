import NavBar from "../Components/Shared/NavBar";
import BreadCrumbs from "../Components/UI/BreadCrumbs";
import TodoDetailCard from "../Components/UI/TodoDetailCard";

const TodoDetails = () => {
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
