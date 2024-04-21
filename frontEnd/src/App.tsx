import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetails from "./Pages/TodoDetails";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="more/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
