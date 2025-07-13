import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import ErrorStrip from "../ErrorStrip"; // Import your error component

const NotesForm = () => {
  const [note, setNote] = useState({ title: "", body: "" });
  const [error, setError] = useState("");
  const [notes, setNotes] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoNotes, setVideoNotes] = useState([]);
  const [currentVideoNote, setCurrentVideoNote] = useState("");
  const playerRef = useRef(null);

  const handleFormChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    if (!note.title || !note.body) {
      setError("Title and body are required.");
      return;
    }
    setNotes([...notes, note]);
    setNote({ title: "", body: "" });
    setError("");
  };

  const addVideoNote = () => {
    if (!videoUrl || !currentVideoNote) {
      setError("Video URL and note text are required.");
      return;
    }
    setVideoNotes([
      ...videoNotes,
      { url: videoUrl, text: currentVideoNote },
    ]);
    setVideoUrl("");
    setCurrentVideoNote("");
    setError("");
  };

  const handleVideoNoteClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main
      style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/007/903/079/non_2x/online-documentation-database-and-process-automation-to-efficiently-manage-files-document-management-system-knowledge-and-documentation-in-enterprise-with-erp-corporate-business-technology-free-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
          borderRadius: '8px',
          padding: '2rem',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <h2 className="mb-2 mt-3 text-6xl font-bold text-violet-950 underline decoration-inherit decoration-2 underline-offset-4 dark:mt-0 dark:text-slate-400">
          Notes
        </h2>
        <h3 className="text-2xl font-medium">
          Add New Note
        </h3>
        <form onSubmit={addNote}>
          <label htmlFor="title" className="block text-lg font-medium">
            Title:
          </label>
          <input
            className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            type="text"
            id="title"
            required
            value={note.title}
            onChange={handleFormChange}
          />
          <label htmlFor="body" className="block text-lg font-medium">
            Body:
          </label>
          <textarea
            className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-violet-400 dark:active:border-violet-400"
            rows="12"
            id="body"
            required
            value={note.body}
            onChange={handleFormChange}
          />
          <button
            className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-4 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900 dark:border-violet-300 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-slate-900"
            type="submit"
          >
            <FaPlus />
            Add Note
          </button>
        </form>
        {error && <ErrorStrip error={error} />}

        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Paste video URL here"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                fontSize: '14px',
                marginBottom: '10px'
              }}
            />
          </div>
          <textarea
            value={currentVideoNote}
            onChange={(e) => setCurrentVideoNote(e.target.value)}
            placeholder="Write your note here"
            style={{
              width: '100%',
              height: '100px',
              padding: '10px',
              boxSizing: 'border-box',
              fontSize: '14px',
              marginBottom: '10px'
            }}
          />
          <button
            onClick={addVideoNote}
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              cursor: 'pointer',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          >
            Add Video Note
          </button>

          <div>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Video Notes</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {videoNotes.map((note, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <a
                    href="#"
                    onClick={() => handleVideoNoteClick(note.url)}
                    style={{ color: '#007BFF', textDecoration: 'underline' }}
                  >
                    {note.text} ({note.url})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotesForm;
