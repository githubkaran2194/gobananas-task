import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TableData from "./components/Table";
import GetData from "./components/GetData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableData />} />
          <Route path="/posts/:id" element={<GetData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
