import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { TableHeader } from "../Table";
import ErrorStrip from "../ErrorStrip";

// Expanded static data for frontend testing
const mockPapers = [
  { _id: "1", paper: "Mathematics" },
  { _id: "2", paper: "Physics" },
  { _id: "3", paper: "Web Development" },
  { _id: "4", paper: "Internet of Things" },
  { _id: "5", paper: "Networking" },
  { _id: "6", paper: "VLSI" },
  { _id: "7", paper: "Analog Circuits" },
  { _id: "8", paper: "Operating System" },
  { _id: "9", paper: "Data Structures" },
  { _id: "10", paper: "Algorithms" }
];

const mockStudentData = {
  "1": [
    { name: "John", test: 1, seminar: 2, assignment: 3, attendance: 4 },
    { name: "Jane", test: 2, seminar: 3, assignment: 4, attendance: 5 },
    { name: "Michael", test: 1, seminar: 2, assignment: 3, attendance: 4 },
    { name: "Emily", test: 2, seminar: 3, assignment: 4, attendance: 5 },
  ],
  "2": [
    { name: "Alice Johnson", test: 3, seminar: 1, assignment: 2, attendance: 3 },
    { name: "Bob Brown", test: 4, seminar: 2, assignment: 3, attendance: 1 },
    { name: "Charlie", test: 2, seminar: 3, assignment: 4, attendance: 5 },
    { name: "Diana", test: 4, seminar: 3, assignment: 2, attendance: 4 },
  ],
  "3": [
    { name: "Anna", test: 3, seminar: 2, assignment: 4, attendance: 5 },
    { name: "Peter", test: 2, seminar: 1, assignment: 3, attendance: 2 },
    { name: "Sophie", test: 4, seminar: 3, assignment: 2, attendance: 5 },
    { name: "Leo", test: 1, seminar: 4, assignment: 3, attendance: 2 },
  ],
  "4": [
    { name: "Tom", test: 2, seminar: 3, assignment: 4, attendance: 1 },
    { name: "Anna", test: 3, seminar: 2, assignment: 1, attendance: 4 },
    { name: "Helen", test: 4, seminar: 1, assignment: 3, attendance: 2 },
    { name: "James", test: 2, seminar: 3, assignment: 4, attendance: 5 },
  ],
  "5": [
    { name: "John", test: 1, seminar: 2, assignment: 3, attendance: 4 },
    { name: "Jane", test: 2, seminar: 3, assignment: 4, attendance: 5 },
    { name: "Michael", test: 3, seminar: 2, assignment: 4, attendance: 1 },
    { name: "Emily", test: 4, seminar: 1, assignment: 3, attendance: 2 },
  ],
  "6": [
    { name: "Alice", test: 3, seminar: 2, assignment: 4, attendance: 5 },
    { name: "Bob", test: 2, seminar: 1, assignment: 3, attendance: 4 },
    { name: "Charlie", test: 4, seminar: 3, assignment: 1, attendance: 2 },
    { name: "Diana", test: 1, seminar: 4, assignment: 2, attendance: 3 },
  ],
  "7": [
    { name: "Eve", test: 2, seminar: 3, assignment: 4, attendance: 5 },
    { name: "Frank", test: 1, seminar: 4, assignment: 3, attendance: 2 },
    { name: "Grace", test: 3, seminar: 1, assignment: 4, attendance: 5 },
    { name: "Hank", test: 2, seminar: 3, assignment: 1, attendance: 4 },
  ],
  "8": [
    { name: "Ivy", test: 4, seminar: 2, assignment: 3, attendance: 1 },
    { name: "Jack", test: 3, seminar: 1, assignment: 4, attendance: 2 },
    { name: "Kathy", test: 2, seminar: 3, assignment: 5, attendance: 4 },
    { name: "Leo", test: 1, seminar: 4, assignment: 2, attendance: 3 },
  ],
  "9": [
    { name: "Mona", test: 3, seminar: 4, assignment: 2, attendance: 1 },
    { name: "Nina", test: 2, seminar: 3, assignment: 1, attendance: 4 },
    { name: "Omar", test: 4, seminar: 2, assignment: 3, attendance: 5 },
    { name: "Paul", test: 1, seminar: 4, assignment: 2, attendance: 3 },
  ],
  "10": [
    { name: "Quinn", test: 2, seminar: 1, assignment: 4, attendance: 5 },
    { name: "Rita", test: 3, seminar: 4, assignment: 2, attendance: 1 },
    { name: "Steve", test: 1, seminar: 2, assignment: 3, attendance: 4 },
    { name: "Tina", test: 4, seminar: 1, assignment: 2, attendance: 5 },
  ],
};

const InternalResultForm = () => {
  const [paper, setPaper] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [internal, setInternal] = useState([]);
  const [id, setId] = useState(null);
  const [error, setError] = useState("");

  const fetchInternal = (e) => {
    e.preventDefault();
    setError("");
    if (!paper) {
      setError("Please select a paper.");
      return;
    }
    if (mockStudentData[paper]) {
      setId("mock-id");
      setInternal(mockStudentData[paper]);
      setDisabled(true);
      setError("");
    } else {
      setError("No data available for the selected paper.");
    }
  };

  const addInternalMark = (e) => {
    e.preventDefault();
    // Mock saving internal marks
    toast.success("Internal marks saved successfully.");
    setDisabled(true);
    setError("");
  };

  const deleteInternalMark = (e) => {
    e.preventDefault();
    if (!id) {
      setError("No record to delete");
      return;
    }
    // Mock deleting internal marks
    toast.success("Internal marks deleted successfully.", {
      icon: ({ theme, type }) => <FaTrash />,
    });
    setInternal([]);
    setId(null);
  };

  const handleFormChange = (e) => {
    const index = parseInt(e.target.id);
    const value = e.target.value;
    const key = e.target.name;
    const newStudent = { ...internal[index], [key]: value };
    const newInternal = internal.map((student, i) =>
      i === index ? newStudent : student
    );
    setInternal(newInternal);
  };

  return (
    <main style={{
      backgroundImage: "url('https://d2lk14jtvqry1q.cloudfront.net/media/img_20160718_180814_01_b01f8d8af1.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.7
    }}>
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        width: "80%", // Adjust this width to match the attendance page container
        maxWidth: "1200px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: 0.9,
        maxHeight: "90vh", // Optional: Adjust the height to fit within the viewport
        overflowY: "auto" // Optional: Add scroll if content overflows
      }}>
        <h2 className="mb-2 mt-3 whitespace-break-spaces text-4xl font-bold text-white-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-4xl">
          Internal Marks
        </h2>
        <section className="form__head">
          <form className="w-full gap-4 accent-violet-900 md:flex">
            <select
              className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-gray-800 bg-gray-900 text-gray-300 p-2 outline-none focus:border-violet-900 focus:text-white dark:border-slate-200 dark:bg-gray-800 dark:text-gray-300"
              placeholder="select paper"
              name="paper"
              id="paper"
              value={paper}
              required
              onChange={(e) => setPaper(e.target.value)}
            >
              <option defaultValue hidden>
                Select Paper
              </option>
              {mockPapers.map((paper) => (
                <option key={paper._id} value={paper._id}>
                  {paper.paper}
                </option>
              ))}
            </select>
            <button
              className="mb-4 h-10 w-auto rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-8 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 disabled:cursor-not-allowed dark:border-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-slate-900"
              type="submit"
              onClick={(e) => fetchInternal(e)}
            >
              Fetch
            </button>
          </form>
        </section>
        <div>{error ? <ErrorStrip error={error} /> : ""}</div>
        <section className="internal__body">
          <form className="internal_body_form group">
            {internal.length ? (
              <div className="my-4 w-full overflow-auto rounded-md border-2 border-slate-900 dark:border-slate-500">
                <table className="w-full border-collapse">
                  <TableHeader
                    AdditionalHeaderClasses={"first:text-left"}
                    Headers={[
                      "Student",
                      "Test",
                      "Seminar",
                      "Assignment",
                      "Attendance",
                      "Total",
                    ]}
                  />
                  <tbody>
                    {internal.map((student, index) => (
                      <tr
                        key={index}
                        className={
                          parseInt(student?.test) +
                            parseInt(student?.seminar) +
                            parseInt(student?.assignment) +
                            parseInt(student?.attendance) >
                          12
                            ? "bg-violet-900/50"
                            : ""
                        }
                      >
                        <td className="p-2 text-left">{student.name}</td>
                        <td className="p-2 text-center">
                          <input
                            className="w-full p-2 border rounded-md"
                            type="number"
                            required
                            min="0"
                            max="5"
                            disabled={disabled}
                            id={index}
                            name="test"
                            value={student.test}
                            onChange={(e) => handleFormChange(e)}
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            className="w-full p-2 border rounded-md"
                            type="number"
                            required
                            min="0"
                            max="5"
                            disabled={disabled}
                            id={index}
                            name="seminar"
                            value={student.seminar}
                            onChange={(e) => handleFormChange(e)}
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            className="w-full p-2 border rounded-md"
                            type="number"
                            required
                            min="0"
                            max="5"
                            disabled={disabled}
                            id={index}
                            name="assignment"
                            value={student.assignment}
                            onChange={(e) => handleFormChange(e)}
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            className="w-full p-2 border rounded-md"
                            type="number"
                            required
                            min="0"
                            max="5"
                            disabled={disabled}
                            id={index}
                            name="attendance"
                            value={student.attendance}
                            onChange={(e) => handleFormChange(e)}
                          />
                        </td>
                        <td className="p-2 text-center">
                          <input
                            className="w-full p-2 border rounded-md"
                            type="number"
                            required
                            min="0"
                            max="5"
                            disabled
                            id={index}
                            name="total"
                            value={
                              parseInt(student?.test) +
                              parseInt(student?.seminar) +
                              parseInt(student?.assignment) +
                              parseInt(student?.attendance)
                            }
                            onChange={(e) => handleFormChange(e)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
            {internal.length && disabled ? (
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="mb-4 flex h-10 items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900"
                  onClick={() => setDisabled(false)}
                >
                  <FaEdit /> Edit
                </button>
                <button
                  type="submit"
                  className="mb-4 flex h-10 items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-red-700 focus:bg-violet-900"
                  onClick={(e) => deleteInternalMark(e)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            ) : (
              ""
            )}
            {internal.length && !disabled ? (
              <button
                type="submit"
                className="mb-4 flex h-10 items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900"
                onClick={(e) => addInternalMark(e)}
              >
                <FaPlus /> Save
              </button>
            ) : (
              ""
            )}
            <p className="text-balance m-2 overflow-hidden text-ellipsis whitespace-break-spaces rounded bg-red-300/50 p-1 text-center font-medium text-red-700"></p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default InternalResultForm;