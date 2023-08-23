//import Libs
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Cookies from 'js-cookie';
import { getDataLoggued } from './backend/utils';

//Import Components
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Home/Login';


export default function RenderApp() {

  const [ islogged, setIslogged ] = React.useState(false);
  const [ data, setData ] = React.useState({});

  const handleCheckToken = () => {
      setIslogged(true);
      const container_ = document.getElementById('container_login')
      //add class
      container_.classList.add('display_none')
  }

  React.useEffect(() => {
    
    const token = Cookies.get('token');
   
    if (token) {

      const permit = async () => {

      const response = await getDataLoggued();

        if (response) {
          setIslogged(true);
          const container_ = document.getElementById('container_login')
          //add class
          container_.classList.add('display_none')
        }

      }

      permit();
      
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
      <Login 
        isLogin={islogged}
        setIsLogin={setIslogged}
        setData={setData}
      />
    }
    </>
  );
}