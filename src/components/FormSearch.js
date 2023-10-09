import React, { useContext } from 'react'
import {FiSearch} from 'react-icons/fi'
import { ThemeContext } from './ContextTheme'
import { GithubContex } from './UserContex'

const FormSearch = () => {
  const {darkTheme} = useContext(ThemeContext)
  const {searchTerm,setSearchTerm,getGithubUser,error} = useContext(GithubContex)

  const handleSubmit = (e)=>{
   e.preventDefault()
    if(searchTerm === ''){
      alert('Enter username')
    }else{
      getGithubUser()
    }
  }

  return (
    <div className={!darkTheme?`form-wrapper py-2 px-3 rounded`:`form-wrapper py-2 px-3 rounded dark`} >
        <div className='d-flex gap-2 align-items-center w-75 '>
        <FiSearch color='#8079ff' size='24px'/>
        <input type='text' 
        placeholder='Search Github username....' 
        className='form-control border border-0' value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>

        </div>
        <span className='text-danger'>{error&&error}</span>
        <button className='btn btn-primary ' onClick={handleSubmit}>Search</button>
    </div>
     
    
  )  
}

export default FormSearch