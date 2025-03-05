import { useState } from "react";
import { facultyData } from "../data";

const StudentDashboard = () => {
  const [doubt, setDoubt] = useState({ department: "", subject: "", description: "", priority: "medium", selectedFaculty: "" });

  const departments = ["Computer Science", "Electronics", "Mechanical", "Civil"];
  const subjects = ["Data Structures", "Algorithms", "Database", "Networks"];
  const availableFaculty = doubt.subject ? facultyData[doubt.subject] : [];

  return (
    <div className="dashboard">
      <h2>Submit New Doubt</h2>
      <select value={doubt.department} onChange={(e) => setDoubt({ ...doubt, department: e.target.value })}>
        <option value="">Select Department</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      <select value={doubt.subject} onChange={(e) => setDoubt({ ...doubt, subject: e.target.value, selectedFaculty: "" })}>
        <option value="">Select Subject</option>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>{subj}</option>
        ))}
      </select>

      <textarea placeholder="Describe your doubt..." value={doubt.description} onChange={(e) => setDoubt({ ...doubt, description: e.target.value })} />

      <button>Submit Doubt</button>
    </div>
  );
};

export default StudentDashboard;
