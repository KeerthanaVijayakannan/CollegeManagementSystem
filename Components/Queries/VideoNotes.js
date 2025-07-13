import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiFillVideoCamera } from 'react-icons/ai';

const VideoNotes = () => {
    const [videoDescription, setVideoDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const paper = location.state?.paper; // Receive paper details from navigation state

    const handleUpload = async (e) => {
        e.preventDefault();
        if (videoFile && paper) {
            // Logic to handle video upload, e.g., sending to backend
            console.log(`Uploading ${videoFile.name} for ${paper.paper}`);
            alert('Video uploaded successfully!');
        }
    };

    return (
        <div className="relative p-8">
            <div className="bg-black/60 p-10 rounded-lg">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <h2 className="text-2xl font-bold text-gray-300 mb-4">Upload Video Notes for {paper?.paper}</h2>
                <form onSubmit={handleUpload}>
                    <input
                        type="text"
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)}
                        placeholder="Video Description"
                        className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
                    />
                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideoFile(e.target.files[0])}
                        className="mt-2 w-full p-2 rounded border border-gray-500 bg-black text-white"
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-violet-900 text-white px-4 py-2 rounded hover:bg-violet-700"
                    >
                        Upload Video
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VideoNotes;
