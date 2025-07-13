import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";

const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const response = await axios.get(`paper/${user.userType}/${user._id}`);
      setPaperList(response.data);
    };
    getPapers();
  }, [setPaperList, user]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('https://careermudhra.com/wp-content/uploads/sri-krishna-college-of-technology-coimbatore.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main
        style={{
          width: "80%",
          maxWidth: "1200px",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.4)", // Semi-transparent white background
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
        }}
      >
        <h2 className="m-6 font-spectral mx-auto text-center text-6xl font-bold text-black-400">
          {/* Your heading content */}
        </h2>
        <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"./paper"}
          >
            <GiBookshelf className="text-[2.5rem] lg:text-[4rem] text-white" />
            <div className="font-semibold text-white">
              Papers
              <p className="text-sm font-normal lg:text-base text-gray-300">
                View Papers and Notes
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"./attendance"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] text-white" />
            <div className="font-semibold text-white">
              Attendance
              <p className="text-sm font-normal lg:text-base text-gray-300">
                Add or Edit Attendance
              </p>
            </div>
          </Link>
          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"../Queries/MyMessage"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] text-white" />
            <div className="font-semibold text-white">
              Messages
              <p className="text-sm font-normal lg:text-base text-gray-300">
                Send Your Message
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"./internal"}
          >
            <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] text-white" />
            <div className="font-semibold text-white">
              Internal Mark
              <p className="text-sm font-normal lg:text-base text-gray-300">
                View or Edit Internal Marks
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"./time_schedule"}
          >
            <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] text-white" />
            <div className="font-semibold text-white">
              Time Schedule
              <p className="text-sm font-normal lg:text-base text-gray-300">
                View or Edit Time Schedule
              </p>
            </div>
          </Link>
          
          {user.userType === "student" && (
            <Link
              className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
              to={"./join_paper"}
            >
              <PiBooks className="text-[2.5rem] lg:text-[4rem] text-white" />
              <div className="font-semibold text-white">
                Manage Paper
                <p className="text-sm font-normal lg:text-base text-gray-300">
                  Join or Leave Paper
                </p>
              </div>
            </Link>
          )}

          <Link
            className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base hover:bg-gray-600 duration-200 lg:text-lg"
            to={"./profile"}
          >
            {user.userType === "student" ? (
              <PiStudent className="text-[2.5rem] lg:text-[4rem] text-white" />
            ) : (
              <PiUser className="text-[2.5rem] lg:text-[4rem] text-white" />
            )}
            <div className="font-semibold text-white">
              Profile
              <p className="text-sm font-normal lg:text-base text-gray-300">
                View or Edit Profile
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dash;
