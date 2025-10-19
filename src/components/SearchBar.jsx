import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Searchbar()
{
    const {search,setSearch} = useContext(UserContext);

    return(
        <>
            <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 mr-4 transition-all duration-200 focus:outline-black focus:ring-blue-500"
            />
        </>
    )
}