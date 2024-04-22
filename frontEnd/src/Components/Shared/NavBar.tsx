import { useCookies } from "react-cookie";

type NaveType = {
  name: string;
};

const NavBar = ({ name }: NaveType) => {
  const token = useCookies(["my-token"]);
  return (
    <div className="navbar bg-base-100 dy-container h-[12%]">
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box ">
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={`https://api.multiavatar.com/${name}.png`} />
              </div>
            </div>
            <h3 className="font-bold text-lg capitalize">
              Hello {`${name}`} !
            </h3>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm bg-blue-500 text-white hover:bg-blue-400"
            >
              Close!
            </label>
          </div>
        </div>
      </div>

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
            {/* <li>
              <a className="justify-between">Profile</a>
            </li> */}

            <li>
              <label htmlFor="my_modal_6" className="">
                Profile
              </label>
            </li>

            {/* Put this part before </body> tag */}

            <li>
              <a
                onClick={() => {
                  token[2]("my-token");
                  localStorage.clear();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
