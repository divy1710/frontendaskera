import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const Login = () => {
  const { setIsAuthenticated, setUserType } = useAuth();
  const [selectedUserType, setSelectedUserType] = useState("student");
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUserType(selectedUserType);
  };

  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>
      <div className="user-toggle">
        <button onClick={() => setSelectedUserType("student")}>
          <FaUserGraduate /> Student
        </button>
        <button onClick={() => setSelectedUserType("faculty")}>
          <FaChalkboardTeacher /> Faculty
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;