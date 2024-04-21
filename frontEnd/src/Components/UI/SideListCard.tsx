import { Link } from "react-router-dom";

export type PType = {
  title: string;
  created_date?: string;
};

const SideListCard = ({ title }: PType) => {
  return (
    <div className="overflow-x-auto ">
      <table className="w-full ">
        <tbody className="">
          {/* row  */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-semibold">{title}</div>
                </div>
              </div>
            </td>
            <td>2/10</td>
            <th>
              <Link
                to="/more/1"
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
