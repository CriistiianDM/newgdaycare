//import Libs
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

//Import Components
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function RenderApp() {

  const [ islogged, setIslogged ] = React.useState(false);

  const handleCheckToken = () => {
      setIslogged(true);
      const container_ = document.getElementById('container_login')
      //add class
      container_.classList.add('display_none')
  }

  React.useEffect(() => {
    
    if (sessionStorage.getItem('token') === 'true') {
      setIslogged(true);
      const container_ = document.getElementById('container_login')
      //add class
      console.log(container_)
      container_.classList.add('display_none')
      console.log('token true')
    }

  }, [])

  return (
    <>
     {
      islogged?
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<><h1>No Found Route</h1></>} />
        </Routes>
      </Router>
      :
      <button 
           id='_auth_check_token'
           style={{ visibility: 'hidden' }}
           onClick={handleCheckToken}>Check Token</button>
    }
    </>
  );
}