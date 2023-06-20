//import libs
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//import components
const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header className='_header'>
                <div onClick={ ()=> { navigate('/') }} className='_img_container'>
                  <img src='/assets/_root/logo.png' alt='_' />
                </div>
                <input type="text" placeholder="Search Student" />
                <Button 
                     sx={{
                        backgroundColor: 'var(--color-radiu-primary)',
                        height: '3em',
                     }} 
                     variant="contained"> Add New Stundent</Button>
            </header>
        </>
    )

};

export default Header;