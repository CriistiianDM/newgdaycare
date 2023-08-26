import React from 'react';
import GoogleLogin from '../google/GoogleLogin';


function Login({
    isLogin,
    setIsLogin,
    setData,
    setIsLoad
}) {
  return (
     <>
        <GoogleLogin 
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setData={setData}
                setIsLoad={setIsLoad}
        />
        <div id="container_login" className="_conatiner_login">
        <div className="_logo_google">
            <img src="/assets/_root/google.webp"  alt="google" />
        </div>
        <h1>Sign in to your Google account</h1>
        <div id="btn-actions-google_" className="_actions">
        <section className='_display_none' id="section-button-google">
                    <a id="buttonDiv">
                        Iniciar con google
                    </a>
        </section>
        </div>
        </div>
     </>
  );
}

export default Login;