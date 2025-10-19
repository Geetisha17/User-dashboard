import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Filterdropdown()
{
    const {users,companyName,setCompanyName} = useContext(UserContext);

    const uniqueCompanyNames = users.reduce((acc,user)=>{
        if(!acc.includes(user.company.name)) acc.push(user.company.name);
        return acc;
    },[]);

    return(
        <>
            <select
                value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
                className="px-5 py-2 border border-gray-300 rounded-md bg-white focus-outline-black"
            >
                <option value="">All Compaines</option>
                {uniqueCompanyNames.map((name)=>(
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </>
    )
}
