export default function EmpCard({ emp }) {
  return (
    <div className="card">
      <h2>{emp.name}</h2>
      <h3>{emp.designation}</h3>
      <button>View Profile</button>
    </div>
  );
}
