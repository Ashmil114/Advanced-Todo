import { Link } from "react-router-dom";
import { PType } from "./SideListCard";
import { useEffect, useState } from "react";
import { getTodos } from "../../API/APIServices";
import { format, formatDistance } from "date-fns";

const ProjectCard = ({ title, created_date, project_id }: PType) => {
  const [noCheck, setNocheck] = useState([]);
  const [checkedLength, setCheckedLength] = useState<number>(0);

  useEffect(() => {
    getTodos().then((res) => {
      setNocheck(
        res.data.filter((t: any) => t.project.project_id == project_id)
      );
    });
  }, []);

  useEffect(() => {
    const ch = noCheck.filter((c: any) => c.completion_status === true).length;
    setCheckedLength(ch);
  }, [noCheck]);

  return (
    <div className="card w-64 bg-base-100 shadow-xl h-fit max-sm:h-fit max-sm:w-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">
          {checkedLength}/{noCheck.length} Completed
        </p>
        <div className="flex">
          <p className="card-description">
            {format(created_date, "dd-MM-yyyy")}
          </p>
          <p className="card-description">
            {formatDistance(created_date, new Date())}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/more/${project_id}`}
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
