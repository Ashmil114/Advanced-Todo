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

// export const loginAPI = (username: string, password: string) => {
//   return new Promise<{
//     token: string;
//     user_id: number;
//     username: string;
//   }>((resolve, reject) => {
//     API.post("user/login", {
//       username,
//       password,
//     }).then((res) => {
//       console.log(res);

//       if (res.statusText != "OK") return reject("User doesn't Exists");

//       resolve(res.data);
//     });
//   });
// };

export const loginAPI = (username: string, password: string) => {
  return new Promise<{
    token: string;
    user_id: number;
    username: string;
  }>((resolve, reject) => {
    API.post("user/login", {
      username,
      password,
    })
      .then((res) => {
        console.log(res);

        if (res.statusText !== "OK") {
          // Use 'reject' to handle the error case
          reject("User doesn't exist");
        } else {
          resolve(res.data);
        }
      })
      .catch((error) => {
        // Handle any other errors (e.g., network issues)

        if (error.message === "Request failed with status code 400") {
          reject("User doesn't exist ! Please Sigup");
        }
      });
  });
};

export const getProject = () => {
  return API.get("projects");
};

export const addProject = (title: string, user_id: number) => {
  return API.post("projects/", {
    title,
    user_id,
  });
};

export const detailProject = (project_id: string) => {
  return API.get(`projects/project-detail/${project_id}`);
};

export const updateProject = (project_id: string, title: string) => {
  return API.put(`projects/project-detail/${project_id}`, {
    project_id,
    title,
  });
};

export const deleteProject = (project_id: string) => {
  return API.delete(`projects/project-detail/${project_id}`);
};

export const getTodos = () => {
  return API.get("todos/");
};

export const addTodos = (
  project_id: string,
  heading: string,
  description: string
) => {
  return API.post("todos/", { project_id, heading, description });
};

export const updateTodo = (
  todo_id: string,
  completion_status: boolean,
  heading: string,
  description: string
) => {
  return API.put(`todos/todo-detail/${todo_id}`, {
    todo_id,
    completion_status,
    heading,
    description,
  });
};

export const deleteTodo = (todo_id: string) => {
  return API.delete(`todos/todo-detail/${todo_id}`);
};
