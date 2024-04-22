import { useEffect, useState } from "react";
import SideListCard from "./UI/SideListCard";
import { getProject } from "../API/APIServices";

const SideList = ({ userId }: { userId: number }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getProject().then((res) => {
      setData(res.data.filter((d: any) => d.owner.id == userId));
    });
  }, []);

  return (
    <div>
      {data.length !== 0 ? (
        <h1 className="text-lg font-semibold text-slate-500 my-2 text-start ">
          Projects
        </h1>
      ) : null}
      <div className="flex flex-col gap-2">
        {data.length === 0 ? (
          <div className="w-full flex justify-center h-[10rem] items-center flex-col">
            <p className="text-lg font-medium">No Project!</p>
            <p className="text-sm text-slate-400">Add Projects</p>
          </div>
        ) : null}
        {data.map((item) => (
          <>
            <SideListCard
              title={item.title}
              project_id={item.project_id}
              created_date=""
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SideList;
