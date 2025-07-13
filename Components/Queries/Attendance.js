import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const subjects = ['Networking', 'CGM', 'IoT', 'Python','java','C++','Discrete Mathematics'];

const initialStudents = [
    { id: 1, name: 'RANJANIPANDI S', attendance: {} },
    { id: 2, name: 'Bharath', attendance: {} },
    { id: 3, name: 'siva', attendance: {} },
    { id: 4, name: 'keerthi', attendance: {} },
    { id: 5, name: 'kaviya', attendance: {} },
    { id: 6, name: 'Archana', attendance: {} },
    { id: 7, name: 'Sandhose', attendance: {} },
    { id: 8, name: 'kishore', attendance: {} },
    { id: 9, name: 'Lavanya', attendance: {} },
    { id: 10, name: 'yogesh', attendance: {} },
    { id: 11, name: 'Raja', attendance: {} },
    { id: 12, name: 'Ram', attendance: {} },
    { id: 13, name: 'keerthana', attendance: {} },
    { id: 14, name: 'karthi', attendance: {} },
    { id: 15, name: 'maha', attendance: {} },
    { id: 16, name: 'kavya', attendance: {} },
    { id: 17, name: 'swathi', attendance: {} },
    { id: 18, name: 'Divi', attendance: {} },
    { id: 19, name: 'Mathi', attendance: {} },
    { id: 20, name: 'nithya', attendance: {} },
    { id: 21, name: 'virat', attendance: {} },
    { id: 22, name: 'ishan', attendance: {} },
    { id: 23, name: 'Rohith', attendance: {} },
    { id: 24, name: 'jadeja', attendance: {} },
    { id: 25, name: 'priya', attendance: {} },
    { id: 26, name: 'Andrew Green', attendance: {} },
    { id: 27, name: 'Michelle Adams', attendance: {} },
    { id: 28, name: 'Brian Baker', attendance: {} },
    { id: 29, name: 'pooja', attendance: {} },
    { id: 30, name: 'Kevin Carter', attendance: {} },
    { id: 31, name: 'Helen Mitchell', attendance: {} },
    { id: 32, name: 'George Perez', attendance: {} },
    { id: 33, name: 'divya', attendance: {} },
];

const Attendance = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedHour, setSelectedHour] = useState('');
    const [students, setStudents] = useState(initialStudents);
    const [showTable, setShowTable] = useState(false);
    const [presentStudents, setPresentStudents] = useState([]);

    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleSubjectChange = (e) => setSelectedSubject(e.target.value);
    const handleHourChange = (e) => setSelectedHour(e.target.value);

    const handleFetch = () => {
        if (selectedDate && selectedSubject && selectedHour) {
            setShowTable(true);
        } else {
            toast.error('Please select a date, subject, and hour.');
        }
    };

    const handleSave = () => {
        const present = students.filter(student =>
            student.attendance[selectedDate]?.[selectedSubject]?.[selectedHour]
        );
        setPresentStudents(present);
        toast.success('Attendance saved successfully!');

        // Reset selected values to ensure the table reflects changes
        setSelectedDate('');
        setSelectedSubject('');
        setSelectedHour('');
        setShowTable(false);
    };

    const toggleAttendance = (id) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === id
                    ? {
                          ...student,
                          attendance: {
                              ...student.attendance,
                              [selectedDate]: {
                                  ...student.attendance[selectedDate],
                                  [selectedSubject]: {
                                      ...student.attendance[selectedDate]?.[selectedSubject],
                                      [selectedHour]: !student.attendance[selectedDate]?.[selectedSubject]?.[selectedHour],
                                  },
                              },
                          },
                      }
                    : student
            )
        );
    };

    const containerStyle = {
        padding: '50px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: 'auto',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '20px',
    };

    const selectorsStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    };

    const inputStyle = {
        padding: '10px',
        border: '1px solid #555',
        borderRadius: '4px',
        backgroundColor: '#444',
        color: 'white',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '1rem',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyle = {
        padding: '10px',
        border: '1px solid #555',
        textAlign: 'center',
        backgroundColor: '#222',
    };

    const tdStyle = {
        padding: '10px',
        border: '1px solid #555',
        textAlign: 'center',
        backgroundColor: '#333',
    };

    const pageStyle = {
        backgroundImage: 'url("https://us.123rf.com/450wm/loft39studio/loft39studio2306/loft39studio230680920/207144332-school-classroom-in-blur-background-without-young-student-blurry-view-of-elementary-class-room-no-k.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={pageStyle}>
            <ToastContainer />
            <div style={containerStyle}>
                <h2 style={headingStyle}>Staff Attendance Management</h2>
                <div style={selectorsStyle}>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        style={inputStyle}
                    />
                    <select
                        value={selectedSubject}
                        onChange={handleSubjectChange}
                        style={inputStyle}
                    >
                        <option value="">Select Subject</option>
                        {subjects.map((subject, index) => (
                            <option key={index} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        value={selectedHour}
                        onChange={handleHourChange}
                        placeholder="Hour"
                        style={inputStyle}
                    />
                    <button
                        onClick={handleFetch}
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Fetch
                    </button>
                    <button
                        onClick={handleSave}
                        style={{ ...buttonStyle, marginTop: '10px' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Save
                    </button>
                </div>
                {showTable && (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Name</th>
                                <th style={thStyle}>Attendance</th>
                                <th style={thStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td style={tdStyle}>{student.name}</td>
                                    <td style={tdStyle}>
                                        {student.attendance[selectedDate]?.[selectedSubject]?.[selectedHour] ? 'Present' : 'Absent'}
                                    </td>
                                    <td style={tdStyle}>
                                        <button
                                            onClick={() => toggleAttendance(student.id)}
                                            style={buttonStyle}
                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                                        >
                                            Mark {student.attendance[selectedDate]?.[selectedSubject]?.[selectedHour] ? 'Absent' : 'Present'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {presentStudents.length > 0 && (
                <div style={{ ...containerStyle, marginTop: '20px' }}>
                    <h3 style={headingStyle}>Present Students</h3>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {presentStudents.map((student) => (
                                <tr key={student.id}>
                                    <td style={tdStyle}>{student.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Attendance;
