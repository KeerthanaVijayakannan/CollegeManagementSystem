import React from "react";
import UserContext from "../../Hooks/UserContext";
import { TableHeader } from "../Table";
import ErrorStrip from "../ErrorStrip";

// Static data for frontend testing
const mockInternalMarks = [
  {
    paper: { paper: "Mathematics" },
    marks: { test: 3, seminar: 2, assignment: 1, attendance: 1 }
  },
  {
    paper: { paper: "Physics" },
    marks: { test: 2, seminar: 3, assignment: 2, attendance: 1 }
  }
];

const InternalStudent = () => {
  const { user } = React.useContext(UserContext);
  const [internal, setInternal] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    // Simulating a successful fetch with static data
    try {
      setInternal(mockInternalMarks);
    } catch (err) {
      setError("Failed to load internal marks.");
    }
  }, [user]);

  return (
    <main className="internal">
      <style>{`
        .internal {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-image: url('https://d2lk14jtvqry1q.cloudfront.net/media/img_20160718_180814_01_b01f8d8af1.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          min-height: 100vh;
          opacity: 0.7;
        }

        .content-overlay {
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark overlay */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 1200px;
          color: #fff;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        th {
          background-color: #5a2d81;
          color: #fff;
        }

        tr:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
        }

        tr:hover {
          background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
        }
      `}</style>
      <div className="content-overlay">
        <h2 className="mb-2 mt-3 whitespace-break-spaces text-4xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-6xl">
          Internal Mark
        </h2>
        <div>{error ? <ErrorStrip error={error} /> : ""}</div>
        {internal.length ? (
          <section className="my-4 w-full overflow-auto rounded-md border-2 border-slate-900 dark:border-slate-500 dark:p-[1px]">
            <table className="w-full">
              <TableHeader
                AdditionalHeaderClasses={"first:text-left"}
                Headers={[
                  "Paper",
                  "Test",
                  "Seminar",
                  "Assignment",
                  "Attendance",
                  "Total",
                ]}
              />
              <tbody className="text-left">
                {internal.map((paper, index) => (
                  <tr
                    key={index}
                    className={
                      parseInt(paper?.marks.test) +
                        parseInt(paper?.marks.seminar) +
                        parseInt(paper?.marks.assignment) +
                        parseInt(paper?.marks.attendance) >
                      7
                        ? "border-t-[1px] border-violet-500 bg-violet-900/50 first:border-none"
                        : "border-t-[1px] border-violet-500 first:border-none"
                    }
                  >
                    <td className="p-2 text-left">{paper.paper.paper}</td>
                    <td className="p-2 text-center">{paper.marks.test}</td>
                    <td className="p-2 text-center">{paper.marks.seminar}</td>
                    <td className="p-2 text-center">{paper.marks.assignment}</td>
                    <td className="p-2 text-center">{paper.marks.attendance}</td>
                    <td className="p-2 text-center">
                      {paper.marks.test +
                        paper.marks.seminar +
                        paper.marks.assignment +
                        paper.marks.attendance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default InternalStudent;
