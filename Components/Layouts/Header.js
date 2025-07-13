import React, { useContext } from "react";
import { FaUniversity } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { setUser, setPaperList } = useContext(UserContext);
  const logout = () => {
    setUser("");
    setPaperList([]);
    localStorage.clear();
    toast.info("Logged Out");
  };
  
  return (
    <header className="absolute top-0 flex w-full justify-between bg-blue-900 text-white dark:bg-blue-800 dark:text-gray-200">
      <Link
        to="/dash"
        className="ml-4 flex items-center gap-2 px-3 py-1 text-2xl font-semibold sm:text-3xl"
      >
        <FaUniversity className="m-1 text-blue-300" />
        <h1 className="m-0 pr-1 font-spectral text-white decoration-blue-500 decoration-[3px] underline-offset-[3px] hover:underline">
          Ed F
          <span className="inline-block h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 sm:h-[1.15rem] sm:w-[1.15rem]"></span>
          lio
        </h1>
      </Link>
      <Link
        to="./"
        className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-blue-700 hover:text-white"
        onClick={() => logout()}
      >
        <p>&nbsp;Logout&nbsp;&nbsp;</p>
        <FiLogOut className="text-xl text-blue-300" />
      </Link>
    </header>
  );
};

export default Header;
