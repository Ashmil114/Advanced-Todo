import API from "./Axios";

export const register = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    API.post("user/signup", {
      username,
      password,
    }).then((res) => {
      if (res.data["non_field_errors"]?.length > 0)
        return reject("User already Exists");

      resolve("Okay");
    });
  });
};

export const loginAPI = (username: string, password: string) => {
  return new Promise<{
    token: string;
    user_id: number;
    username: string;
  }>((resolve, reject) => {
    API.post("user/login", {
      username,
      password,
    }).then((res) => {
      if (res.data["non_field_errors"]?.length > 0)
        return reject("User doesn't Exists");

      resolve(res.data);
    });
  });
};

export const getProject = () => {
  return API.get("projects");
};
