import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Registration/Registration";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          {/* Navigation Links */}
          <Link to="/" style={styles.link}>Register</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

// Inline styles for navigation (optional)
const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    marginBottom: "20px",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
  },
};

export default App;
