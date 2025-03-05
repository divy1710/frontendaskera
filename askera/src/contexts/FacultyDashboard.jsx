import { useState } from "react";
import { FiBell } from "react-icons/fi";

const FacultyDashboard = () => {
  const [doubts] = useState([{ id: 1, student: "John Doe", subject: "Data Structures", description: "Binary Trees", status: "pending" }]);
  const [selectedDoubt, setSelectedDoubt] = useState(null);

  return (
    <div className="dashboard">
      <h2>Faculty Dashboard</h2>
      <div className="doubt-list">
        {doubts.map((doubt) => (
          <div key={doubt.id} onClick={() => setSelectedDoubt(doubt)}>
            <p>{doubt.student} - {doubt.subject}</p>
          </div>
        ))}
      </div>
      {selectedDoubt && <div>Chat Section for {selectedDoubt.student}</div>}
    </div>
  );
};

export default FacultyDashboard;