import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetails from "./Pages/TodoDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="more/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
