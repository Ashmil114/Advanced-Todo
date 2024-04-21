import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <div className="text-sm breadcrumbs my-10">
      <ul>
        <li>
          <Link to="/home" className="">
            Home
          </Link>
        </li>
        <li>
          <a className="btn-disabled">More</a>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
