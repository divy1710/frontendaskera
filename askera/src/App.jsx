import React, { useState, createContext, useContext } from "react";
import { FiSun, FiMoon, FiBell, FiSearch, FiUpload, FiStar } from "react-icons/fi";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const ThemeContext = createContext();
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const useTheme = () => useContext(ThemeContext);

const facultyData = {
  "Data Structures": [
    { name: "Dr. Smith", rating: 4.5, totalDoubts: 120, resolvedDoubts: 115 },
    { name: "Prof. Johnson", rating: 4.2, totalDoubts: 90, resolvedDoubts: 82 }
  ],
  "Algorithms": [
    { name: "Dr. Williams", rating: 4.8, totalDoubts: 150, resolvedDoubts: 148 },
    { name: "Prof. Davis", rating: 4.3, totalDoubts: 75, resolvedDoubts: 70 }
  ],
  "Database": [
    { name: "Dr. Brown", rating: 4.6, totalDoubts: 95, resolvedDoubts: 90 },
    
    { name: "Prof. Miller", rating: 4.4, totalDoubts: 85, resolvedDoubts: 80 }
  ],
  "Networks": [
    { name: "Dr. Taylor", rating: 4.7, totalDoubts: 110, resolvedDoubts: 105 },
    { name: "Prof. Anderson", rating: 4.1, totalDoubts: 65, resolvedDoubts: 58 }
  ]
};

const Login = () => {
  const { setIsAuthenticated, setUserType } = useAuth();
  const [selectedUserType, setSelectedUserType] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "", 
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUserType(selectedUserType);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto" 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=86&q=80"
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setSelectedUserType("student")}
              className={`${selectedUserType === "student" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} px-4 py-2 rounded-lg flex items-center space-x-2`}
            >
              <FaUserGraduate />
              <span>Student</span>
            </button>
            <button
              onClick={() => setSelectedUserType("faculty")}
              className={`${selectedUserType === "faculty" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} px-4 py-2 rounded-lg flex items-center space-x-2`}
            >
              <FaChalkboardTeacher />
              <span>Faculty</span>
            </button>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password" 
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  const [doubt, setDoubt] = useState({
    department: "",
    subject: "",
    description: "",
    priority: "medium",
    selectedFaculty: ""
  });

  const departments = ["Computer Science", "Electronics", "Mechanical", "Civil"];
  const subjects = ["Data Structures", "Algorithms", "Database", "Networks"];
  const availableFaculty = doubt.subject ? facultyData[doubt.subject] : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                className="h-8 w-8"
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Student Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FiSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FiBell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FiUpload className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Submit New Doubt</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department</label>
                  <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={doubt.department}
                    onChange={(e) => setDoubt({ ...doubt, department: e.target.value })}
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={doubt.subject}
                    onChange={(e) => setDoubt({ ...doubt, subject: e.target.value, selectedFaculty: "" })}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>{subj}</option>
                    ))}
                  </select>
                </div>

                {doubt.subject && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Faculty</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {availableFaculty.map((faculty) => (
                        <div 
                          key={faculty.name}
                          className={`p-4 border rounded-lg cursor-pointer ${
                            doubt.selectedFaculty === faculty.name 
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900" 
                              : "border-gray-200 hover:border-blue-300"
                          }`}
                          onClick={() => setDoubt({ ...doubt, selectedFaculty: faculty.name })}
                        >
                          <h3 className="font-medium text-gray-900 dark:text-white">{faculty.name}</h3>
                          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <div>Rating: {faculty.rating}/5.0</div>
                            <div>Resolved: {faculty.resolvedDoubts}/{faculty.totalDoubts}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                  <textarea
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    rows="4"
                    value={doubt.description}
                    onChange={(e) => setDoubt({ ...doubt, description: e.target.value })}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                  <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={doubt.priority}
                    onChange={(e) => setDoubt({ ...doubt, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Doubt
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacultyDashboard = () => {
  const [doubts] = useState([
    {
      id: 1,
      student: "John Doe",
      subject: "Data Structures",
      description: "Help with Binary Trees",
      status: "pending",
      timestamp: "2024-01-20T10:30:00",
      rating: 4.5,
      chat: [
        { sender: "student", message: "I'm having trouble understanding tree traversal", timestamp: "2024-01-20T10:30:00" },
        { sender: "faculty", message: "Let me explain with an example", timestamp: "2024-01-20T10:31:00" }
      ]
    },
    {
      id: 2,
      student: "Jane Smith",
      subject: "Algorithms",
      description: "Doubt in Dynamic Programming",
      status: "resolved",
      timestamp: "2024-01-20T09:15:00",
      rating: 4.8,
      chat: []
    }
  ]);

  const [selectedDoubt, setSelectedDoubt] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileSend = () => {
    if (selectedFile) {
      setSelectedFile(null);
    }
  };

  const totalDoubts = doubts.length;
  const resolvedDoubts = doubts.filter(d => d.status === "resolved").length;
  const averageRating = (doubts.reduce((acc, curr) => acc + curr.rating, 0) / totalDoubts).toFixed(1);
  const resolutionRate = ((resolvedDoubts / totalDoubts) * 100).toFixed(1);

  return (
    <div className="p-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Faculty Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiBell className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Doubts</h3>
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{totalDoubts}</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Resolved</h3>
          <p className="text-3xl font-bold text-green-900 dark:text-green-100">{resolvedDoubts}</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Pending</h3>
          <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">{totalDoubts - resolvedDoubts}</p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Rating</h3>
          <div className="flex items-center">
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{averageRating}</p>
            <span className="text-sm ml-2 text-purple-700 dark:text-purple-300">/5.0</span>
          </div>
          <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
            Resolution Rate: {resolutionRate}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Recent Doubts</h3>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {doubts.map((doubt) => (
              <li 
                key={doubt.id} 
                className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${selectedDoubt?.id === doubt.id ? 'bg-blue-50 dark:bg-blue-900' : ''}`}
                onClick={() => setSelectedDoubt(doubt)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{doubt.student}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doubt.subject}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doubt.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Rating: {doubt.rating}/5.0</span>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        doubt.status === "resolved"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {doubt.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {selectedDoubt && (
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col h-[600px]">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Chat with {selectedDoubt.student}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{selectedDoubt.subject}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedDoubt.chat.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'faculty' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] rounded-lg p-3 ${msg.sender === 'faculty' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    {msg.fileUrl ? (
                      <div className="space-y-2">
                        <p>{msg.message}</p>
                        <a href={msg.fileUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                          View File
                        </a>
                      </div>
                    ) : (
                      <p>{msg.message}</p>
                    )}
                    <p className="text-xs mt-1 opacity-70">{new Date(msg.timestamp).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <FiUpload className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </label>
                <input
                  type="text"
                  className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => {
                    if (newMessage.trim() || selectedFile) {
                      handleFileSend();
                      setNewMessage("");
                    }
                  }}
                >
                  <FiStar className="h-5 w-5" />
                </button>
              </div>
              {selectedFile && (
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Selected file: {selectedFile.name}
                  <button
                    className="ml-2 text-red-500 hover:text-red-600"
                    onClick={() => setSelectedFile(null)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userType, setUserType }}>
        <div className={isDarkMode ? "dark" : ""}>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
            </button>
            {!isAuthenticated ? (
              <Login />
            ) : userType === "student" ? (
              <StudentDashboard />
            ) : (
              <FacultyDashboard />
            )}
          </div>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
