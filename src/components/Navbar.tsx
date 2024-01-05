import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const signOutOnClick = () => {
    logout();
  };

  const signInOnClick = () => {
    loginWithRedirect();
  };

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  const clicked = () => {
    setIsVisible(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 hover:text-orange-600">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          Blackwood Electric
        </Link>
      </div>
      <div className="block">
        <button
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-white border rounded
            border-white hover:text-orange-600 hover:border-orange-600"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {isVisible ? (
        <div className="w-full block flex-grow items-center">
          <div className="text-sm lg:flex-grow">
            <Button
              onClick={clicked}
              className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
              text-white hover:text-orange-600 mr-4 hover:bg-white">
              <Link to="/">Home</Link>
            </Button>
            <Button
              onClick={clicked}
              className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
              text-white hover:text-orange-600 mr-4 hover:bg-white">
              <Link to="/about">About</Link>
            </Button>
            <Button
              onClick={clicked}
              className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
              text-white hover:text-orange-600 mr-4 hover:bg-white">
                <Link to="/calendar">Calendar</Link>
            </Button>
            <Button
              onClick={clicked}
              className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
                  text-white hover:text-orange-600 mr-4 hover:bg-white">
              <div>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            </Button>
            {!isAuthenticated ? (
              <Button
                onClick={signInOnClick}
                className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
            text-white hover:text-orange-600 mr-4 hover:bg-white"
              >
                <Link to="/">Login</Link>
              </Button>
            ) : (
              <Button
                onClick={signOutOnClick}
                className="p-3 m-5 flex place-items-center mt-4 bg-orange-600 lg:inline-block lg:mt-0
                text-white hover:text-orange-600 mr-4 hover:bg-white"
              >
                <Link to="/">Sign Out</Link>
              </Button>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
