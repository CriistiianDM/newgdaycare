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


const RenderRoutes = () => {
     return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<><h1>No Found Route</h1></>} />
        </Routes>
      </Router>
     )
}


export default function RenderApp() {

  const [ islogged, setIslogged ] = React.useState(false);
  const [ data, setData ] = React.useState({});
  const [ isLoad, setIsLoad ] = React.useState(true);


  React.useEffect(() => {
    
    const token = Cookies.get('token');
   
    if (token) {

      const permit = async () => {

      const response = await getDataLoggued();
        setIsLoad(true);
        if (response) {
          setIslogged(true);
          setIsLoad(false);
          const container_ = document.getElementById('container_login')
          //add class
          container_.classList.add('display_none')
        }

      }

      permit();
      
    }
    else {
      setIsLoad(false);
    }

  }, [])

  return (
    <>
        {
          islogged && !isLoad ? (
            <RenderRoutes />
          ) : isLoad ? (
            <div className="container_loader">
              <span className="loader"></span>
            </div>
          ) : (
            <Login setIsLoad={setIsLoad} isLogin={islogged} 
                   setIsLogin={setIslogged} setData={setData} />
          )
        }
    </>
  );
}