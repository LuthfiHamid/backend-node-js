import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/users");
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mx-auto mt-5">
            <div className="lg:w-1/2 mx-auto">
                <Link to={`add`} className="block w-full lg:w-auto mb-3 lg:mb-0 bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded">
                    Add New
                </Link>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link
                                        to={`edit/${user.id}`}
                                        className="text-sm bg-blue-500 text-white mr-2 py-1 px-2 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;