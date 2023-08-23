import React from 'react';
import { decodeToken } from "react-jwt";
import Cookies from 'js-cookie';
import { getDataLoggued } from '../../backend/utils';

const _get_auth = async (setData, setInfo) => {
    
        try {
            // console.log('google', google);
            google.accounts.id.initialize({
            client_id: '637920236611-gg7f17406ioeeae5mgbi4bm644q9trhe.apps.googleusercontent.com',
            callback: (response) => handleCredentialResponse(response, setData, setInfo),
            })

            google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" , text: "login with google"}  
            );

            google.accounts.id.prompt();
            const _container_button = document.getElementById('section-button-google');
            _container_button.classList.remove('_display_none');
        } catch (error) {
            console.log('error' , error);
        }

}


const have_permision = ({
    data,
    dataToken
}) => {

    const result = (data)?.filter( (item) => {
        console.log(item['correo_electrónico'] === dataToken['email'] , dataToken['email'] , 'data');
        return item['correo_electrónico'] === dataToken['email']
    })

    return {
        "result": result.length > 0 ? true : false,
        "data": result 
    }

}


const handleCredentialResponse = async (response, setIsLogin, setData) => {

    try {

        Cookies.set('token', 
                    decodeToken(response.credential), 
                    { expires: 5 }
        );

        /**
         * !: Esto debe de ser un estado global, Mejorar otro dia.
        */
        const result = await getDataLoggued();
     
        if (result) {
            setIsLogin(true);
        }

    }
    catch (error) {
        console.log('error', error);
    }
    
}

const GoogleLogin = ({
    isLogin,
    setIsLogin,
    setData
}) => {

    const _root = document.getElementById('_body');
    const script_id = document.getElementById('google-login');

    if(script_id) {
        _root.removeChild(script_id);
    }

    //crea un script js y lo inserta en el body
    //insertar este script en body
    const _script = document.createElement('script');
    _script.src = 'https://accounts.google.com/gsi/client';
    _script.async = true;
    _script.id = 'google-login';
    _script.defer = true;
    _root.appendChild(_script);

    //saber si el script se cargo
    _script.onload = () => {
        _get_auth(setIsLogin, setData);
    };


    React.useEffect(() => {
       
    }, []);
    
    return (
        <></>
    )
}



export default GoogleLogin;

