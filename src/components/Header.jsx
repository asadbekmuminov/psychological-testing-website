
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsOpen(false);
    window.location.reload(); // yoki history.push("/") bilan asosiy sahifaga yo'naltirish mumkin
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-black btn btn-ghost normal-case">
          Home
        </Link>

        {/* Menyu va hamburger tugma */}
        <div className="relative flex items-center space-x-4">
          {/* Kirish, ro'yxatdan o'tish yoki user ismi va Logout */}
          {currentUser ? (
            <>
              <span className="font-semibold hidden md:block">{currentUser.fullName}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn pt-2  btn-outline btn-sm hidden md:inline-block"
              >
                Kirish
              </Link>
              <Link
                to="/register"
                className="btn pt-2  btn-primary btn-sm  md:inline-block"
              >
                Ro‘yxatdan o‘tish
              </Link>
            </>
          )}

          {/* Hamburger tugma - doim ko'rinadi */}
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Close icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Hamburger icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-base-100 shadow-lg rounded-md z-50">
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-100 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/chatPage"
                className="block px-4 py-2 hover:bg-gray-100 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                AI yordamchi
              </Link>

              {currentUser && (
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
