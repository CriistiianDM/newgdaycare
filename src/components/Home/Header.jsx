//import libs
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//import components
const Header = () => {

    const [ _data , setData ] = React.useState([]);
    const [isSearch , setSearch ] = React.useState(false);
    
    const navigate = useNavigate();

    const onChange = (e) => {
        const data = JSON.parse(sessionStorage.getItem('data'))[0];
        const data2 = JSON.parse(sessionStorage.getItem('data'))[1];
        //juntar los dos arrays en uno solo
        const data_ = [...data, ...data2];

        //console.log('data', data);

        const find = data_.filter( (element) => {
            //expression regular para buscar coincidencias
            const regex = new RegExp( (e.target.value).toLowerCase() , 'gi');

            if (element.fullname === undefined ||
                element.fullname === null ||
                element.fullname === '') {
                return false;
            }

            return ((element.fullname).toLowerCase()).match(regex);
            
        });

        if (e.target.value === '') {
            setSearch(false);
            return;
        }

        setSearch(true);
        setData(find); 
    }

    const mouseLeave = () => {
        setSearch(false);
    }

    const mouseEnter = () => {
        setSearch(true);
    }

    const handleViewStundent = (data, title) => {
      
        const dataSend = {
            data: data,
            img: data.photo,
            name: data.fullname,
            sede: title,
        }
        //crear variable global
        sessionStorage.setItem('data_stundent', JSON.stringify(dataSend));
        navigate('/profile');
    };

    return (
        <>
            <div style={{height: '4em'}} />
            <header className='_header'>
                <div onClick={ ()=> { navigate('/') }} className='_img_container'>
                  <img src='/assets/_root/logo.png' alt='_' />
                </div>
                <div onMouseLeave={mouseLeave} className='_container_search'>
                    <input onChange={onChange} type="text" placeholder="Search Student" />
                    {
                    isSearch &&
                    <div onMouseEnter={mouseEnter} className='_container_result_search'>
                        <div className='_result_search'>
                            {
                                _data.map( (element, index) => (
                                    <a key={index} onClick={() => { handleViewStundent(element , element.homeroom)}} className='photoa'>
                                         <div className='phoyo'>
                                            <img src={element.photo} alt='_' />
                                         </div>
                                        <h1>{element.fullname}</h1>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    }
                </div>
                <Button 
                     sx={{
                        backgroundColor: 'var(--color-radiu-primary)',
                        height: '3em',
                        visibility: 'hidden',
                        opacity: 0
                     }} 
                     variant="contained"> Add New Stundent</Button>
            </header>
        </>
    )

};

export default Header;