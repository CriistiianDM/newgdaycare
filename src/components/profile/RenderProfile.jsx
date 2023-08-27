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


    React.useEffect(() => {
        
        const data = window.sessionStorage.getItem('data_stundent');
        
        if (window.sessionStorage.hasOwnProperty('data_stundent')) {
            let data_ = JSON.parse(data);
            console.log('data_', data_);
            setData({
                sedePerteneciente: (data_.sede).slice(0, 3),
                img_profile:  data_.img,
                nombreUsuario: data_.name,
                cursosAsignados: (data_.sede).slice(4, data_.sede.length),
                aprovadeUser: `${data_.data.approved_pickup_1_first_name} ${data_.data.approved_pickup_1_last_name}`
            });
        }

        //scroll to top
        window.scrollTo(0, 0);

    }, []);


    //render
    return (
        <>
           <main className='_container_info_personal'>
                <section className='_container_profile_data_'>
                    <div className='_profile_data_'>
                        <img  className="profile" src={data.img_profile} alt="profile" />
                        <div>
                            <h1>{data.nombreUsuario}</h1>
                            <h1>{data.aprovadeUser}</h1>
                        </div>
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