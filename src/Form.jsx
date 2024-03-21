import React from 'react'
import { useState } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        language: '',
        stdinput: '',
        sourceCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(formData)
        try {
            const response = await fetch('https://tufbackend-4nyb.onrender.com/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    username: '',
                    language: '',
                    stdinput: '',
                    sourceCode: ''
                });
                navigate("/Table");
            } else {
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form. Please try again.');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            <br />
            <br />
            <label htmlFor="language">Select a programming language:</label>
            <select id="language" name="language" value={formData.language} onChange={handleChange}>
                <option value="" disabled>Select language</option>
                <option value="c++">C++</option>
                <option value="python">Java</option>
                <option value="python">JavaScript</option>
                <option value="python">Python</option>
            </select>

            <label htmlFor="stdinput">Standard Input :</label>
            <textarea id="stdinput" name="stdinput" value={formData.stdinput} onChange={handleChange} rows={4} cols={50} />

            <label htmlFor="sourceCode">Source Code:</label>
            <textarea id="sourceCode" name="sourceCode" value={formData.sourceCode} onChange={handleChange} rows={10} cols={1000} />
            <br />
            <br />
            <input type="submit" defaultValue="Submit" />
        </form>
    );
}
