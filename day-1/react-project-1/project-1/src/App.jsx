import EmpCard from "./components/EmpCard";
import employees from "./data/data";
import { useState } from "react";
import "./App.css";
function App() {
  const [empName, setEmpName] = useState("");

  const handleSubmit = (e) => {
    setEmpName(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <>
      <h1>Employee Directory</h1>
      <div className="search-container">
        <div>
          <label>Search Employee</label>
          <input type="text" value={empName} onChange={handleSubmit} />
          <p>{empName}</p>
        </div>
      </div>
      <div className="container">
        {employees.map((emp) => {
          return <EmpCard key={emp.name} emp={emp} />;
        })}
      </div>
    </>
  );
}

export default App;
