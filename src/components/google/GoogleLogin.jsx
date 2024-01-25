import React from 'react';
import { decodeToken } from "react-jwt";
import Cookies from 'js-cookie';
import { getData , getDataLoggued } from '../../backend/utils';

const _get_auth = async (setData, setInfo , loader) => {
    
        try {
            google.accounts.id.initialize({
            client_id: '637920236611-gg7f17406ioeeae5mgbi4bm644q9trhe.apps.googleusercontent.com',
            callback: (response) => handleCredentialResponse( response,  setData, setInfo, loader)})

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
        return item['email'] === dataToken['email']
    })

    return {
        "result": result.length > 0 ? true : false,
        "data": result 
    }

}

const handleCredentialResponse = async ( response, setIsLogin, setData, loader ) => {

    try {
        loader(true);

        /**
         * !: Esto debe de ser un estado global, Mejorar otro dia.
        */
        const result = await getData('USERS');
        const data = await getDataLoggued();
   
        if (have_permision({
            data: result.data,
            dataToken: decodeToken(response.credential)
            }).result
        ) {
            Cookies.set('token', 
                decodeToken(response.credential), 
                { expires: 5 }
            );
            if (data) {
                setIsLogin(true);
                loader(false);
            }
        }
        else {
            setIsLogin(false)
            loader(false);
            alert('No tienes permiso para acceder');

        }

    }
    catch (error) {
        console.log('error', error);
    }
    
}

const GoogleLogin = ({
    isLogin,
    setIsLogin,
    setData,
    setIsLoad
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
        _get_auth(setIsLogin, setData , setIsLoad);
    };


    React.useEffect(() => {
       
    }, []);
    
    return (
        <></>
    )
}



export default GoogleLogin;

