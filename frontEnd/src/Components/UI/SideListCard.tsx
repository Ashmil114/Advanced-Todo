import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../../API/APIServices";

export type PType = {
  title: string;
  created_date: string;
  project_id: string;
};

const SideListCard = ({ title, project_id }: PType) => {
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
    <div className="overflow-x-auto ">
      <table className="w-full ">
        <tbody className="">
          {/* row  */}
          <tr className="flex justify-between">
            <td className="w-1/2">
              <div className="flex items-center gap-3 ">
                <div>
                  <div className="font-semibold">{title}</div>
                </div>
              </div>
            </td>
            <td>
              {checkedLength}/{noCheck.length}
            </td>
            <th>
              <Link
                to={`/more/${project_id}`}
                className="btn bg-blue-500 text-white hover:bg-blue-400 btn-xs"
              >
                View
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SideListCard;
