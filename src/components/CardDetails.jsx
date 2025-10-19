import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function CardDetails() {
  const { filteredUsers } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-8">
      {filteredUsers && filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-black text-white p-6 rounded-2xl transform transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-300 mb-1">{user.email}</p>
            <p className="text-gray-400 mb-4">{user.company.name}</p>
            <button
              onClick={() => navigate(`/user/${user.id}`)}
              className="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200"
            >
              View Details
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No Users Found 
        </p>
      )}
    </div>
  );
}