import { useContext, useState, useEffect, startTransition } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import UserContext from "../../Hooks/UserContext";
import { TableHeader } from "../Table";
import Loading from "../Layouts/Loading";
import ErrorStrip from "../ErrorStrip";

// Create the Axios instance
const axiosInstance = axios.create({
  baseURL: "https://kollege-api.onrender.com",
  headers: { "Content-Type": "application/json" },
});

const JoinPaper = () => {
  const { user, setPaperList } = useContext(UserContext);
  const [error, setError] = useState("");
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const [allPapersResponse, studentPapersResponse] = await Promise.all([
          axiosInstance.get(`paper/manage/${user._id}`),
          axiosInstance.get(`paper/student/${user._id}`)
        ]);
        startTransition(() => {
          setPapers(allPapersResponse.data);
          setPaperList(studentPapersResponse.data);
        });
      } catch (err) {
        startTransition(() => {
          setError(err.message);
        });
      }
    };
    
    fetchPapers();
  }, [user, setPaperList]);

  const handleJoin = async (e) => {
    try {
      const paperId = e.currentTarget.id;
      const index = e.currentTarget.name;
      const students = [...papers[index].students, user._id];
      await updateStudents(paperId, students, index);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLeave = async (e) => {
    try {
      const paperId = e.currentTarget.id;
      const index = e.currentTarget.name;
      const students = papers[index].students.filter((student) => student !== user._id);
      await updateStudents(paperId, students, index);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateStudents = async (paperId, studentsObj, paperIndex) => {
    try {
      const response = await axiosInstance.patch(`/paper/${paperId}`, {
        students: studentsObj,
        id: paperId,
      });
      toast.success(response.data.message);
      startTransition(() => {
        setPapers((prevPapers) =>
          prevPapers.map((paper, index) =>
            index === parseInt(paperIndex, 10) ? { ...paper, joined: !paper.joined } : paper
          )
        );
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {user.userType === "student" ? (
        <main>
          <h2 className="mb-2 mt-3 whitespace-break-spaces text-4xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400 md:text-6xl">
            Manage Paper
          </h2>
          <form>
            {papers.length ? (
              <div className="my-4 w-full overflow-auto rounded-md border-2 border-slate-900 dark:border-slate-500 dark:p-[1px]">
                <table className="w-full text-left">
                  <TableHeader
                    AdditionalRowClasses={"rounded-t-xl text-left"}
                    AdditionalHeaderClasses={'last:text-center'}
                    Headers={[
                      "Paper",
                      "Department",
                      "Year",
                      "Semester",
                      "Teacher",
                      "Manage",
                    ]}
                  />
                  <tbody>
                    {papers.map((paper, index) => (
                      <tr key={paper._id}>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 px-4 py-2">
                          {paper.paper}
                        </td>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 px-4 py-2">
                          {paper.department}
                        </td>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 px-4 py-2">
                          {paper.year}
                        </td>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 px-4 py-2">
                          {paper.semester}
                        </td>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 px-4 py-2">
                          {paper.teacher.name}
                        </td>
                        <td className="border-t-[1px] border-violet-400 dark:border-slate-400 p-0">
                          {!paper.joined ? (
                            <button
                              type="button"
                              id={paper._id}
                              name={index}
                              onClick={handleJoin}
                              className="m-0 flex h-auto w-full justify-center bg-transparent py-3 text-lg hover:bg-violet-900 hover:text-slate-100 dark:text-slate-100"
                            >
                              Join
                            </button>
                          ) : (
                            <button
                              type="button"
                              id={paper._id}
                              name={index}
                              onClick={handleLeave}
                              className="m-0 flex h-auto w-full justify-center bg-transparent py-3 text-lg hover:bg-red-600 hover:text-slate-100 dark:text-slate-100"
                            >
                              Leave
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <Loading />
            )}
          </form>
          {error ? <ErrorStrip error={error} /> : ""}
        </main>
      ) : (
        <Navigate to="/dash" />
      )}
    </>
  );
};

export default JoinPaper;
