// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold text-blue-600">
                Askera
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Connect with Faculty Members and
              <span className="text-blue-600"> Get Your Doubts Solved</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Start your learning journey today! Connect with experienced faculty,
              ask questions, and get detailed explanations for all your academic doubts.
            </p>

            {/* Start Free Trial Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Start Your Free Trial Today</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Start Free Trial
                </Link>
                <span className="text-gray-500">No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Select Your Subject</h3>
                <p className="text-gray-600">
                  Choose from a wide range of subjects and departments
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold mb-2">Connect with Faculty</h3>
                <p className="text-gray-600">
                  Get help from experienced faculty members
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 text-2xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
                <p className="text-gray-600">
                  Rate faculty based on their responses and help
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your account</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Select Subject</h3>
                <p className="text-gray-600">Choose your department</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Ask Questions</h3>
                <p className="text-gray-600">Submit your doubts</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Get Solutions</h3>
                <p className="text-gray-600">Receive expert help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
