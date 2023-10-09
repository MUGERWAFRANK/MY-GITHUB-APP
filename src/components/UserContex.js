import axios from 'axios';
import React, { createContext, useState } from 'react'


export const GithubContex = createContext()
const UserContex = ({children}) => {

    const [SearchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState (null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    const GITHUB_TOKEN = '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'
    const getGithubUser = async (username) =>{
        try{
            setLoading(true)
            const response = await axios.get(`https://api.github.com/users/${username}`,{  
            headers:{
                Authorization:`Bearer ${GITHUB_TOKEN}`
            }
              })
            const data = await response.data
            console.log(data)
            setLoading(false)
            setUser(data)
        }catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <GithubContex.Provider value={{user,setSearchTerm,loading,error,SearchTerm,getGithubUser,}}>
        {children}
    </GithubContex.Provider>
  )
}

export default UserContex