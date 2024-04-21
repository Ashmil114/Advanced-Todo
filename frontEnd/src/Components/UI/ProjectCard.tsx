import { Link } from "react-router-dom";
import { PType } from "./SideListCard";

const ProjectCard = ({ title, created_date }: PType) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl h-48 max-sm:h-40 max-sm:w-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">2/10 Completed</p>
        <p className="card-description">{created_date}</p>
        <div className="card-actions justify-end">
          <Link
            to="/more/1"
            className="btn bg-blue-600 text-white hover:bg-blue-500 max-sm:btn-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
