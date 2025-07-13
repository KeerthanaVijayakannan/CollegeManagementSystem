import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillBook } from "react-icons/ai";

const Paper = ({ userType }) => {
  const [papers, setPapers] = useState([]);
  const [paperTitles, setPaperTitles] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [newPaper, setNewPaper] = useState({ paper: "", year: "", syllabus: "" });
  const [newNote, setNewNote] = useState("");
  const [tempNotes, setTempNotes] = useState([]); // For temporarily storing notes

  // Fetch all papers and paper titles when the component mounts
  useEffect(() => {
    axios.get("http://localhost:5050/api/papers")
      .then(response => {
        setPapers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the papers!", error);
      });

    axios.get("http://localhost:5050/api/papers/titles")
      .then(response => {
        setPaperTitles(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the paper titles!", error);
      });
  }, []);

  const handleAddPaper = () => {
    if (newPaper.paper && newPaper.year && newPaper.syllabus) {
      axios.post("http://localhost:5050/api/papers", newPaper)
        .then(response => {
          setPapers([...papers, response.data]);
          setNewPaper({ paper: "", year: "", syllabus: "" });
        })
        .catch(error => {
          console.error("There was an error adding the paper!", error);
        });
    }
  };

  const handleRemovePaper = (id) => {
    axios.delete("http://localhost:5050/api/papers/${id}")
      .then(() => {
        setPapers(papers.filter((paper) => paper.id !== id));
        if (selectedPaper && selectedPaper.id === id) {
          setSelectedPaper(null);
        }
      })
      .catch(error => {
        console.error("There was an error deleting the paper!", error);
      });
  };

  const handlePaperClick = (title) => {
    const selected = papers.find(paper => paper.paper === title);
    if (selected) {
      setSelectedPaper(selected);
    }
  };

  const handleBackToList = () => {
    setSelectedPaper(null);
  };

  const handleAddNote = () => {
    if (selectedPaper && newNote) {
      // Temporarily store the note
      setTempNotes([...tempNotes, newNote]);
      setNewNote(""); // Clear the note input field
    }
  };

  return (
    <main style={{
      backgroundImage: "url('https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-14.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.8
    }}>

      <div className="bg-black/60 p-10 rounded-lg">
        {selectedPaper ? (
          <>
            <button
              onClick={handleBackToList}
              className="mb-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back to Papers
            </button>
            <br />
            <button
              onClick={() => handleRemovePaper(selectedPaper.id)}
              className="mb-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove Paper
            </button>
            <h3 className="text-2xl font-bold text-gray-300">{selectedPaper.paper}</h3>
            <div className="mt-4">
              <h4 className="text-xl text-gray-300">Syllabus:</h4>
              <p className="text-gray-400">{selectedPaper.syllabus}</p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl text-gray-300">Notes:</h4>
              {tempNotes.length ? (
                <ul className="list-disc pl-5 text-gray-400">
                  {tempNotes.map((note, index) => (
                    <li key={index} className="mb-1">{note}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No notes added.</p>
              )}
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note"
                className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
              />
              <button
                onClick={handleAddNote}
                className="mt-2 bg-violet-900 text-white px-4 py-2 rounded hover:bg-violet-700"
              >
                Add Note
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-2 mt-3 text-4xl font-bold text-center text-gray-300 underline">
              Papers
            </h2>
            {userType === 'staff' && (
              <div className="mb-6 bg-black/70 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-300">Add New Paper</h3>
                <input
                  type="text"
                  value={newPaper.paper}
                  onChange={(e) => setNewPaper(prev => ({ ...prev, paper: e.target.value }))}
                  placeholder="Paper Name"
                  className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
                />
                <input
                  type="text"
                  value={newPaper.year}
                  onChange={(e) => setNewPaper(prev => ({ ...prev, year: e.target.value }))}
                  placeholder="Year"
                  className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
                />
                <textarea
                  value={newPaper.syllabus}
                  onChange={(e) => setNewPaper(prev => ({ ...prev, syllabus: e.target.value }))}
                  placeholder="Syllabus"
                  className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
                />
                <button
                  onClick={handleAddPaper}
                  className="mt-2 bg-violet-900 text-white px-4 py-2 rounded hover:bg-violet-700"
                >
                  Add Paper
                </button>
              </div>
            )}
            <section className="pt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {paperTitles.length ? (
                paperTitles.map((title, index) => (
                  <div 
                    key={index} 
                    className="hover:no-underline cursor-pointer"
                    onClick={() => handlePaperClick(title)} // Handle click event
                  >
                    <article className="flex items-center bg-black/70 rounded-md p-2 hover:bg-gray-700 duration-200">
                      <AiFillBook className="text-3xl text-gray-300 lg:text-4xl" />
                      <div className="ml-2">
                        <h3 className="text-xl font-semibold text-gray-300 line-clamp-1 lg:text-2xl">
                          {title}
                        </h3>
                      </div>
                    </article>
                  </div>
                ))
              ) : (
                <p className="text-lg text-gray-300">No Papers Found.</p>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Paper;