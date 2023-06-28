//import libs
import React from 'react';
import Header from '../components/Home/Header';
import RenderProfile from '../components/profile/RenderProfile';

const data = {
    sedePerteneciente: 'Sede Perteneciente',
    img_profile:  'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Rintarou-Okabe.Steins-Gate.webp',
    nombreUsuario: 'Nombre Usuario',
    cursosAsignados: 'Cursos Asignados',
}

//import components
const Profile = () => {

     return (
        <>
            <Header />
            <RenderProfile {...data} />
        </>
     )

};

export default Profile;