import NavBar from "../Components/Shared/NavBar";
import BreadCrumbs from "../Components/UI/BreadCrumbs";
import ListTable from "../Components/UI/ListTable";

const TodoDetails = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="dy-container">
        <BreadCrumbs />
        <ListTable />
      </div>
    </div>
  );
};

export default TodoDetails;
