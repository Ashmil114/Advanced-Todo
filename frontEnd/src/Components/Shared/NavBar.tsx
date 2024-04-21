type NaveType = {
  name: string;
};

const NavBar = ({ name }: NaveType) => {
  return (
    <div className="navbar bg-base-100 dy-container h-[12%]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold ">
          <span className="text-blue-500">TODO</span> APP
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src={`https://api.multiavatar.com/${name}.png`}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
