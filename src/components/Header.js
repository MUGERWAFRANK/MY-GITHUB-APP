 import React, { useContext } from 'react'
 import Bitman from '../assets/Bitman.png'
 import { ThemeContext } from './ContextTheme'
 import {FaMapMarkerAlt,FaTwitter }from 'react-icons/fa'
import { HiLink, HiOfficeBuilding } from 'react-icons/hi'
import UserContex, { GithubContex } from './UserContex'
import {format,parseISO} from 'date-fns'
 

const Header = () => {
   
  const {darkTheme} = useContext(ThemeContext)
  const {user} = UserContex(GithubContex)
  const cardStyle = 'd-flex  gap-5 align-items-center card-info'
  return (
    <div className={!darkTheme?'card-wrapper rounded p-5':'card-wrapper rounded p-5 dark'}>
        <div className='d-flex align-items-start   avatar-wrapper'>
         <span className='d-flex justify-content-center avatar'>
          <img src={Bitman} alt='bitmap'className='rounded-circle '/>
          </span> 
          <div className='d-flex flex-column gap-2'>
              <h1 className={darkTheme &&'text-light'} >{user.name===null?'The Octocat':user?.name}</h1> 
               <h4 className='sub-text'>@{user?.login}</h4>                    
            </div>
          <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start'>
            <p>Joined {format(parseISO(user?.created_at),'d,MMM yyyy')}</p>
          </div>
        </div> 


        <div className='card-content'>
          <p>
            { user.bio === null? 'This Profile has no bio': user.bio  } </p>
            
          </div>
         
             <div className={!darkTheme? `${cardStyle}`:`${cardStyle} dark`}>  
            <div className='d-flex gap-5 darks align-items-center '> 
            <div className='align-items-center d-flex flex-column gap-2'>
               <p>Repos</p>
              <h2 className={darkTheme &&'text-light'}>{user.public_repos}</h2>
              </div>
              <div className='align-items-center d-flex flex-column gap-2'>   
              <p>Followers</p>
              <h2 className={darkTheme &&'text-light'}>{user.followers}</h2>
              </div>
              <div className='align-items-center d-flex flex-column gap-2'>   
              <p>Following</p>
              <h2 className={darkTheme &&'text-light'}>{user.following}</h2>
              </div>

            
            </div> 
            </div>
            <div className='socail-content'>
                
                   <div className='items d-flex align-items-center gap-2'>
                    <FaMapMarkerAlt color={!darkTheme? `#4b6a9b`: `#ffffff`}/>
                    <p> { user.location === null? 'No location': user.location  }</p>
                    </div> 
                    <div className='items d-flex align-items-center gap-2'>
                    <FaTwitter color={!darkTheme? `#4b6a9b`: `#ffffff`}/>
                    <p> { user.Twitter_username === null? 'Not available': user.Twitter_username }</p>
                    </div> 
                
                
                <div className='items d-flex align-items-center gap-2'>
                    <HiLink color={!darkTheme? `#4b6a9b`: `#ffffff`}/>
                    <p>{user.html_url}</p>
                    </div> 
                    <div className='items d-flex align-items-center gap-2'>
                    <HiOfficeBuilding color={!darkTheme? `#4b6a9b`: `#ffffff`}/>
                    <p>@{user.login}</p>
                    </div> 
            
            </div>

    </div>
  )
}

export default Header