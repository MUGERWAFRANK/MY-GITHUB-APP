

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Navigation from './components/Navigation';
import FormSearch from './components/FormSearch';
import { useContext } from 'react';
import { ThemeContext } from './components/ContextTheme';
import Header from './components/Header';
import { GithubContex } from './components/UserContex';


function App() {

const {darkTheme} = useContext(ThemeContext )
const {user,loading} = useContext(GithubContex)

  const bgLight = 'app-wrapper d-flex flex-column gap-3 justify-content-center align-items-center ';  
  const bgDark = 'app-wrapper d-flex flex-column gap-3 justify-content-center align-items-center Dark' ;
  return (
   
    <div className= {!darkTheme ?`${bgLight}`:`${bgDark} dark`}>  
    <Navigation />
    <FormSearch  />
    {loading && <h1>loading</h1>}
    { user?<Header/>:<h1 className={darkTheme &&'text-light'}>Please no user</h1>}
    
    </div>
  );  
}

export default App;
