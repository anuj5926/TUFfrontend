import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Table() {

    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch('https://tufbackend-4nyb.onrender.com/senddata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.parsedData);
                setDataTable(data.parsedData);
            } else {
                alert('Error submitting form. Please try again.');
            }
        }

        fetchData();
    }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Language</th>
                        <th>Standard Input</th>
                        <th>Source Code</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((data, index) => (
                        <tr key={index}>
                            <td>{data.username}</td>
                            <td>{data.language}</td>
                            <td>{data.stdinput}</td>
                            <td>
                                <SyntaxHighlighter language={data.language} style={darcula}>
                                    {data.sourceCode?.slice(0, 100)}
                                </SyntaxHighlighter>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
