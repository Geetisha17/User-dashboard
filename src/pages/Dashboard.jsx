import React, { useContext } from "react";
import Searchbar from "../components/SearchBar";
import Filterdropdown from "../components/FilterDropdown";
import Carddetails from "../components/CardDetails";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

export default function Dashboard()
{
    const {loading,error} = useContext(UserContext);

    const lastUser = localStorage.getItem("lastVisitedUser");
    if(loading) return <p>Loading....</p>
    if(error) toast.error("Failed To load Component");

    return(
        <div className="min-h-screen text-gray-800 px-6 py-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm my-5 mx-auto max-w-md text-center">
                <h3>Last Visited User</h3>
                {
                    lastUser ? lastUser:<p>No Last user</p>
                }
            </div>
            <div className="flex flex-row justify-center gap-2 mb-6">
                <Searchbar/>
                <Filterdropdown/>
            </div>
            <Carddetails/>
        </div>
    )
}