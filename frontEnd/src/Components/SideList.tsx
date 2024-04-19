import SideListCard from "./UI/SideListCard";

const SideList = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-slate-500 my-2 text-start ">
        Projects
      </h1>
      <div className="flex flex-col gap-2">
        <SideListCard />
        <SideListCard />
        <SideListCard />
        <SideListCard />
        <SideListCard />
      </div>
    </div>
  );
};

export default SideList;
