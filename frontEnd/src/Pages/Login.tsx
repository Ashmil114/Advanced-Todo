import { useEffect, useState } from "react";
import { loginAPI, register } from "../API/APIServices";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [token, setToken] = useCookies(["my-token"]);

  // const [ruserID, setUserid] = useState<number>();
  // const [rname, setName] = useState("");

  useEffect(() => {
    if (!token["my-token"]) {
      navigate(`/`);
    } else {
      if (token["my-token"] != "undefined") {
        navigate(`/home`);
      }
    }
  }, [token]);

  const LoginHandler = () => {
    loginAPI(username, password)
      .then((res) => {
        // setUserid(res.user_id);
        // setName(res.username);
        localStorage.setItem("res", JSON.stringify(res));
        setToken("my-token", res?.token);
        navigate(`/home`);
      })
      .catch((err) => setError(err));
  };

  const SignupHandler = () => {
    if (password.trim().length < 8)
      return alert("password must be longer than 8 characters");

    register(username.trim(), password.trim())
      .then(() => LoginHandler())
      .catch((err) => setError(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200 lg:px-[15rem]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            {login ? "Login Now !" : "Join Now !"}
          </h1>
          <p className="py-6 text-slate-600">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered focus:outline-none focus:border-slate-500 border-slate-300"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none focus:border-slate-500 border-slate-300"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label  w-full py-5 flex flex-col ">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-end w-full "
                  onClick={() => setLogin(!login)}
                >
                  {login ? "New User?" : "Login ?"}
                </a>
                <p className="text-error">{error}</p>
              </label>
            </div>
            <div className="form-control ">
              {login ? (
                <button
                  type="button"
                  className="btn bg-blue-500 text-white hover:bg-blue-400"
                  onClick={() => LoginHandler()}
                >
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  className="btn bg-blue-500 text-white hover:bg-blue-400"
                  onClick={() => SignupHandler()}
                >
                  SignUp
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
