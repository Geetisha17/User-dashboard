import React, { createContext , useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const UserContext = createContext();

export default function UserProvider({children})
{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [search,setSearch] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [error,setError] = useState(null);
    const [filteredUsers,setFilteredUsers]=useState([]);

    useEffect(()=>{
        const fetchUsers = async()=> {
            setLoading(true);
            try{
                const res= await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(res.data);
                setFilteredUsers(res.data);
                toast.success("Successfully loaded");
            }
            catch(err)
            {
                toast.error(err.message);
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);

    useEffect(()=>{
        const filterAll = users.filter((user)=>{
            const filterNameMail = 
        user.name.toLowerCase().includes(search.toLowerCase()) || 
        user.email.toLowerCase().includes(search.toLowerCase());

        const filterCompany =
            user.company.name.toLowerCase().includes(companyName.toLowerCase());

        return filterNameMail && filterCompany;
        });
        setFilteredUsers(filterAll);
        
    },[users,search,companyName]);

    return <UserContext.Provider value={{users,loading,error,filteredUsers,setFilteredUsers,
        search,setSearch,companyName,setCompanyName
    }}>
        {children}
        </UserContext.Provider>
}