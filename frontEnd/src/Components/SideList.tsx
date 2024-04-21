import { useEffect, useState } from "react";
import SideListCard from "./UI/SideListCard";
import { getProject } from "../API/APIServices";

const SideList = ({ userId }: { userId: number }) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getProject().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold text-slate-500 my-2 text-start ">
        Projects
      </h1>
      <div className="flex flex-col gap-2">
        {data
          .filter((d) => d.owner.id == userId)
          .map((item, index) => (
            <>
              <SideListCard key={index + 10} title={item.title} />
            </>
          ))}
      </div>
    </div>
  );
};

export default SideList;
