//import libraries
import React from 'react';
import RenderContent from './RenderContent';

//import components
const RenderProfile = ({
    sedePerteneciente,
    img_profile,
    nombreUsuario,
    cursosAsignados,
}) => {

    const [data, setData] = React.useState({
        sedePerteneciente: '',
        img_profile:  '',
        nombreUsuario: '',
        cursosAsignados: '',
    });


    React.useEffect(() => {
        setData({
            sedePerteneciente: sedePerteneciente,
            img_profile:  img_profile,
            nombreUsuario: (nombreUsuario).toLowerCase(),
            cursosAsignados: cursosAsignados,
        });

    },
    [ sedePerteneciente, 
        img_profile, 
        nombreUsuario, 
        cursosAsignados
    ]);


    //render
    return (
        <>
           <main className='_container_info_personal'>
                <section className='_container_profile_data_'>
                    <div className='_profile_data_'>
                        <img  className="profile" src={data.img_profile} alt="profile" />
                        <h1>{data.nombreUsuario}</h1>
                    </div>
                    <div className='_profile_data_'>
                        <h1>{data.sedePerteneciente}</h1>
                        <h1>{data.cursosAsignados}</h1>
                    </div>
                </section>
           </main>
           <main className='_container_profile_'>
                <RenderContent />
           </main>
        </>
    )

};


export default RenderProfile;