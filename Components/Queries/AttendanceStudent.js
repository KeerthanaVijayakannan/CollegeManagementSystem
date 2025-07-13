import React, { useState } from 'react';
import { format } from 'date-fns';

const students = [
    { id: 1, name: 'Keerthana', attendance: {
        '2024-08-13': {
            'Networking': { '3': false },
        },
    }},
    { id: 2, name: 'Jane Smith', attendance: {} },
    { id: 3, name: 'Alice Johnson', attendance: {} },
];

const AttendanceStudent = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(1); // Default to John Doe
    const [selectedDate, setSelectedDate] = useState('2024-08-08');
    const [selectedSubject, setSelectedSubject] = useState('Math');
    const [selectedHour, setSelectedHour] = useState('3');
    const [showTable, setShowTable] = useState(true);

    const student = students.find((s) => s.id === selectedStudentId);

    const handleStudentChange = (e) => setSelectedStudentId(Number(e.target.value));
    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleSubjectChange = (e) => setSelectedSubject(e.target.value);
    const handleHourChange = (e) => setSelectedHour(e.target.value);

    const containerStyle = {
        padding: '20px',
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
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h2 style={headingStyle}>{student?.name}'s Attendance</h2>
                <div style={selectorsStyle}>
                    <select
                        value={selectedStudentId}
                        onChange={handleStudentChange}
                        style={inputStyle}
                    >
                        {students.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.name}
                            </option>
                        ))}
                    </select>
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
                        {['Networking', 'IoT', 'CyberSecurity', 'Python'].map((subject, index) => (
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
                        onClick={() => setShowTable(true)}
                        style={buttonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Fetch
                    </button>
                </div>
                {showTable && student && (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Date</th>
                                <th style={thStyle}>Subject</th>
                                <th style={thStyle}>Hour</th>
                                <th style={thStyle}>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.attendance[selectedDate] && Object.entries(student.attendance[selectedDate][selectedSubject] || {}).map(([hour, isPresent]) => (
                                <tr key={`${selectedDate}-${selectedSubject}-${hour}`}>
                                    <td style={tdStyle}>{format(new Date(selectedDate), 'yyyy-MM-dd')}</td>
                                    <td style={tdStyle}>{selectedSubject}</td>
                                    <td style={tdStyle}>{hour}</td>
                                    <td style={tdStyle}>{isPresent ? 'Present' : 'Absent'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AttendanceStudent;