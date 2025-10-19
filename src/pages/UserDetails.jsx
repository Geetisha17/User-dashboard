import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function Userdetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserdetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(res.data);
      } catch (error) {
        setError(error);
        toast.error("Failed to load user details");
      } finally {
        setLoading(false);
      }
    };
    fetchUserdetails();
  }, [id]);

  useEffect(() => {
    if (user) localStorage.setItem("lastVisitedUser", user.name);
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  if (!user) return <p>No User found</p>

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <button
        className="absolute top-6 left-6 bg-white text-black font-medium px-5 py-2 border border-gray-400 rounded-md"
        onClick={() => navigate("/")}
      >
        Back to Dashboard
      </button>
      <div className="bg-black text-white rounded-xl p-10 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-4">{user.name}</h2>
        <div className="text-gray-300 space-y-1 mb-6">
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p className="text-gray-100">{user.company.name}</p>
          <p>
            {user.address.street}, {user.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}