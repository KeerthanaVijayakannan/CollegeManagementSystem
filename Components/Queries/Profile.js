import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import Loading from "../Layouts/Loading";
import { PiUserThin, PiStudentThin } from "react-icons/pi";

const Profile = () => {
  const { user } = useContext(UserContext);
  
  // Static data for demonstration
  const staticProfile = {
    name: "Keerthana",
    email: "Keerthana@example.com",
    department: "Computer Science",
    role: user.userType === "staff" ? "Lecturer" : "Student",
    phone: "123-456-7890"
  };
  

  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});

  useEffect(() => {
    // Simulate fetching profile data
    setProfile(staticProfile);
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSaveClick = () => {
    // Simulate saving data
    setProfile(editedProfile);
    setIsEditing(false);
    alert("Profile saved!");
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedProfile({});
  };

  return (
    <main className="flex w-full flex-col justify-center md:w-fit">
      {profile.name ? (
        <>
          <div className="my-4 flex w-full justify-center overflow-auto dark:border-slate-500 dark:p-[1px]">
            {user.userType === "staff" ? (
              <PiUserThin className="m-2 rounded-full border-2 border-slate-900 p-1 text-6xl dark:border-slate-300 md:p-2 md:text-9xl lg:text-[12rem]" />
            ) : (
              <PiStudentThin className="m-2 rounded-full border-2 border-slate-900 p-1 text-6xl font-light dark:border-slate-300 md:p-2 md:text-9xl lg:text-[12rem]" />
            )}
            <div className="flex flex-col items-start justify-center">
              <h2 className="whitespace-break-spaces text-3xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-6xl">
                {profile.name}
              </h2>
              <p className="text-lg capitalize sm:text-xl md:text-2xl">{profile.role}</p>
              {!isEditing && (
                <button onClick={handleEditClick} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="w-full overflow-auto rounded-md border-2 border-slate-900 dark:border-slate-500 dark:p-[1px]">
            {isEditing ? (
              <form>
                <table className="w-full">
                  <tbody>
                    {Object.keys(profile).map((key, index) => (
                      <tr key={index} className="border-t first:border-t-0 border-slate-400 last:border-b-0">
                        <th className="bg-slate-900 p-4 text-base capitalize text-slate-100">{key}</th>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            name={key}
                            value={editedProfile[key] || ''}
                            onChange={handleChange}
                            className="w-full border rounded px-2 py-1"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <button type="button" onClick={handleSaveClick} className="px-4 py-2 bg-green-500 text-white rounded mr-2">
                    Save
                  </button>
                  <button type="button" onClick={handleCancelClick} className="px-4 py-2 bg-gray-500 text-white rounded">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <table className="w-full">
                <tbody>
                  {Object.keys(profile).map((key, index) => (
                    <tr key={index} className="border-t first:border-t-0 border-slate-400 last:border-b-0">
                      <th className="bg-slate-900 p-4 text-base capitalize text-slate-100">{key}</th>
                      <td className="px-4 py-2">{profile[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Profile;
