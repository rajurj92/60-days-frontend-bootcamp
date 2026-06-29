import EmpCard from "./components/EmpCard";
import employees from "./data/data";
import { useState } from "react";
import "./App.css";
function App() {
  const [empName, setEmpName] = useState("");

  const handleSearchChange = (e) => {
    setEmpName(e.target.value);
    // console.log(e.target.value);
  };
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(empName.toLowerCase()),
  );
  return (
    <>
      <h1>Employee Directory</h1>
      <div className="search-container">
        <div>
          {/* <label>Search Employee</label> */}
          <input
            type="text"
            placeholder="Search employee..."
            value={empName}
            onChange={handleSearchChange}
          />
          <p>{empName}</p>
        </div>
      </div>
      <div className="container">
        {filteredEmployees.map((emp) => {
          return <EmpCard key={emp.name} emp={emp} />;
        })}
      </div>
    </>
  );
}

export default App;
