import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { TableHeader } from "../Table";
import Loading from "../Layouts/Loading";
import ErrorStrip from "../ErrorStrip";

const TimeScheduleForm = () => {
  // Updated static data with engineering subjects
  const paperList = [
    { _id: "1", paper: "Math" },
    { _id: "2", paper: "Science" },
    { _id: "3", paper: "History" },
    { _id: "4", paper: "English" },
    { _id: "5", paper: "Engineering Mechanics" },
    { _id: "6", paper: "Thermodynamics" },
    { _id: "7", paper: "Electrical Circuits" },
    { _id: "8", paper: "Digital Logic Design" },
    { _id: "9", paper: "Data Structures" },
    { _id: "10", paper: "Algorithms" },
    { _id: "11", paper: "Operating Systems" },
    { _id: "12", paper: "Database Management Systems" },
  ];

  const initialSchedule = {
    monday: ["Engineering Mechanics", "Thermodynamics", "Electrical Circuits", "Database Management Systems", "Operating Systems"],
    tuesday: ["Science", "Algorithms", "Data Structures", "Digital Logic Design", "History"],
    wednesday: ["Operating Systems", "English", "Data Structures", "Database Management Systems", "Electrical Circuits"],
    thursday: ["Engineering Mechanics", "Thermodynamics", "Electrical Circuits", "Digital Logic Design", "Algorithms"],
    friday: ["Algorithms", "Data Structures", "Data Structures", "Electrical Circuits", "Engineering Mechanics"],
  };
  
  
  const [timeSchedule, setTimeSchedule] = useState(initialSchedule);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    const index = parseInt(e.target.id);
    const day = e.target.name;
    const value = e.target.value;
    const newDay = timeSchedule[day].map((val, ind) => {
      if (ind === index) {
        return value;
      } else return val;
    });
    setTimeSchedule({
      ...timeSchedule,
      [e.target.name]: newDay,
    });
  };

  const addTimeSchedule = (e) => {
    e.preventDefault();
    // Simulate saving data
    alert("Time schedule saved!");
    setDisabled(true);
  };

  const deleteTimeSchedule = (e) => {
    e.preventDefault();
    // Simulate deleting data
    setTimeSchedule(initialSchedule);
    alert("Time schedule deleted!");
  };

  return (
    <main className="time_schedule">
      <h2 className="mb-2 mt-3 whitespace-break-spaces text-4xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-6xl">
        Time Schedule
      </h2>
      <form>
        {timeSchedule.monday ? (
          <div className="my-4 w-full overflow-auto rounded-md border-2 border-slate-900 dark:border-slate-500 dark:p-[1px]">
            <table className="w-full text-center">
              <TableHeader
                AdditionalHeaderClasses={"h-[3rem]"}
                Headers={["Day/Hour", "I", "II", "III", "IV", "V"]}
              />
              <tbody>
                {Object.entries(timeSchedule).map(([key, value]) => {
                  return (
                    <tr key={key}>
                      <th className="border-none bg-slate-900 px-4 py-4 text-base capitalize text-slate-100">
                        {key}
                      </th>
                      {value.map((day, index) => (
                        <td
                          className="min-w-[180px] border-l-[1px] border-t-[1px] border-slate-400 p-1 first:border-none"
                          key={index}
                        >
                          <select
                            className="select-img h-[3rem] focus:outline-none dark:text-violet-50 w-full appearance-none text-center leading-6 focus:border-0 disabled:opacity-100"
                            value={day}
                            name={key}
                            id={index}
                            disabled={disabled}
                            onChange={(e) => handleFormChange(e)}
                          >
                            <option defaultValue>--</option>
                            {paperList.map((paper) => (
                              <option key={paper._id} value={paper.paper}>
                                {paper.paper}
                              </option>
                            ))}
                          </select>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Loading />
        )}

        {timeSchedule.monday && disabled && (
          <div className="flex gap-4">
            <button
              type="button"
              className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 dark:border-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-slate-900"
              onClick={() => setDisabled(false)}
            >
              <FaEdit /> Edit
            </button>
            <button
              type="button"
              className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-red-700 focus:bg-violet-900 dark:border-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-red-700"
              onClick={(e) => deleteTimeSchedule(e)}
            >
              <FaTrash /> Delete
            </button>
          </div>
        )}
        {!disabled && (
          <button
            type="submit"
            className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 dark:border-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-slate-900"
            onClick={(e) => addTimeSchedule(e)}
          >
            <FaPlus /> Save
          </button>
        )}
      </form>
      {error ? <ErrorStrip error={error} /> : ""}
    </main>
  );
};

export default TimeScheduleForm;
