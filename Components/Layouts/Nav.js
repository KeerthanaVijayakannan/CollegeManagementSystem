import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { PiStudent, PiUser, PiBooks } from "react-icons/pi";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav
      id="nav"
      className="z-0 hidden h-full flex-col justify-stretch bg-blue-900 px-4 py-4 text-white dark:bg-blue-800 dark:text-gray-200 lg:flex"
    >
      <ul className="m-auto flex flex-grow flex-col items-center justify-start gap-[6px]">
        <NavLink to={"./paper"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <GiBookshelf className="pt-[0.1rem] text-2xl text-blue-300" />
            Papers
          </li>
        </NavLink>
        <NavLink to={"./attendance"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <IoCalendarOutline className="pt-[0.1rem] text-2xl text-blue-300" />
            Attendance
          </li>
        </NavLink>
        <NavLink to="./myMessage" className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <IoCalendarOutline className="pt-[0.1rem] text-2xl text-blue-300" />
            Messages
          </li>
        </NavLink>
        <NavLink to="./chat" className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <HiOutlineDocumentReport className="pt-[0.1rem] text-2xl text-blue-300" />
            Chat
          </li>
        </NavLink>
        <NavLink to={"./internal"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <HiOutlineDocumentReport className="pt-[0.1rem] text-2xl text-blue-300" />
            Internal Mark
          </li>
        </NavLink>
        <NavLink to={"./time_schedule"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <AiOutlineSchedule className="pt-[0.1rem] text-2xl text-blue-300" />
            Time Schedule
          </li>
        </NavLink>
        <NavLink to="./contact" className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            <GiBookshelf className="pt-[0.1rem] text-2xl text-blue-300" />
            Contact
          </li>
        </NavLink>
        
        {user.role === "student" && (
          <NavLink to={"./join_paper"} className="w-full font-medium">
            <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
              <PiBooks className="pt-[0.1rem] text-2xl text-blue-300" />
              Manage Paper
            </li>
          </NavLink>
        )}
      </ul>
      <ul className="flex flex-grow flex-col items-start justify-end gap-[6px]">
        <NavLink to={"./profile"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-blue-700">
            {user.role === "student" ? (
              <PiStudent className="pt-[0.1rem] text-2xl text-blue-300" />
            ) : (
              <PiUser className="pt-[0.1rem] text-2xl text-blue-300" />
            )}
            {user.name}
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
