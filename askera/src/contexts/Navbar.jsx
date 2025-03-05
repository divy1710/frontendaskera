import { FiSearch, FiBell, FiUpload } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student Portal</h1>
      <div className="navbar-icons">
        <FiSearch />
        <FiBell />
        <FiUpload />
      </div>
    </nav>
  );
};

export default Navbar;
