import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-yellow-500 via-orange-300 to-red-600 text-gray-900">
        <Header />
        <main className="container min-h-screen mx-auto flex justify-center items-center">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h1 className="text-6xl font-extrabold mb-6 text-green-900" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                    Welcome to Dhaabu
                  </h1>
                  <p className="text-lg text-gray-100 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Celebrating African unity through culture, community, and collaboration.
                  </p>
                  <div className="flex justify-center gap-6">
                    <Link to="/login">
                      <button
                        className="px-6 py-3 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition-all font-bold"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button
                        className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-all font-bold"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
