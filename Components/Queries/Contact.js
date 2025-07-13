import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import UserContext from "../../Hooks/UserContext";
import ErrorStrip from "../ErrorStrip"; // Ensure you have this component or handle error differently

const Contact = () => {
  const { user } = useContext(UserContext);

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Save');
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5050/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => setError(error.message));
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Saving...');
    try {
      const response = await axios.post('http://localhost:5050/api/contacts', formDetails);
      setContacts([...contacts, response.data]);
      setFormDetails(formInitialDetails);
      setButtonText('Save');
      toast.success('Contact saved successfully');
    } catch (error) {
      setError(error.message || "Failed to save contact");
      setButtonText('Save');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
      toast.success('Contact deleted successfully');
    } catch (error) {
      setError(error.message || "Failed to delete contact");
    }
  };

  const handleEdit = (contact) => {
    setFormDetails(contact);
    setButtonText('Update');
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
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        width: "80%",
        maxWidth: "1200px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: 0.9,
        maxHeight: "90vh",
        overflowY: "auto"
      }}>
        <h2 className="mb-2 mt-3 text-4xl font-bold text-white underline decoration-inherit decoration-2 underline-offset-4">
          Contact Information
        </h2>
        <section className="form__head">
          <form className="w-full gap-4 md:flex" onSubmit={handleSubmit}>
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
              className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-gray-800 bg-gray-900 text-gray-300 p-2 outline-none"
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
              className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-gray-800 bg-gray-900 text-gray-300 p-2 outline-none"
            />
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(e) => onFormUpdate('email', e.target.value)}
              className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-gray-800 bg-gray-900 text-gray-300 p-2 outline-none"
            />
            <input
              type="tel"
              value={formDetails.phone}
              placeholder="Phone No."
              onChange={(e) => onFormUpdate('phone', e.target.value)}
              className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-gray-800 bg-gray-900 text-gray-300 p-2 outline-none"
            />
            <button
              type="submit"
              className="mb-4 h-10 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 px-6 py-2 font-semibold tracking-wide text-slate-200 hover:bg-violet-900"
            >
              {buttonText}
            </button>
          </form>
        </section>
        {error && <ErrorStrip error={error} />}
        <section className="contact-table mt-4 w-full">
          <h2 className="text-2xl font-bold">Contact Records</h2>
          {contacts.length ? (
            <div className="my-4 overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-left bg-gray-800 text-gray-300">
                    <th className="p-2">First Name</th>
                    <th className="p-2">Last Name</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id} className="bg-gray-900 border-b border-gray-800 text-gray-300">
                      <td className="p-2">{contact.firstName}</td>
                      <td className="p-2">{contact.lastName}</td>
                      <td className="p-2">{contact.email}</td>
                      <td className="p-2">{contact.phone}</td>
                      <td className="p-2 flex gap-2">
                        <button
                          onClick={() => handleEdit(contact)}
                          className="bg-blue-600 p-2 rounded text-white hover:bg-blue-700"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="bg-red-600 p-2 rounded text-white hover:bg-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-300">No contacts found.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Contact;
