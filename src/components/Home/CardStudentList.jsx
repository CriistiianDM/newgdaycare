//import libraries
import React from 'react';
import ListTeacher from './ListTeacher';
import { useNavigate } from 'react-router-dom';


const CardStudentList = ({
    data_stundent,
}) => {

    const [data_, setData_] = React.useState({
        title: '',
        stundents: [],
        dataTeacher: []
    });
    const [isActived, setIsActived] = React.useState(false);
    const navigate = useNavigate();

    const handleViewStundent = (data, title) => {
        data.sede = title;

        //crear variable global
        sessionStorage.setItem('data_stundent', JSON.stringify(data));
        navigate('/profile');

    };

    React.useEffect(() => {
        
        if (data_stundent !== undefined && 
            data_stundent !== null      &&
            data_stundent !== '' &&
            data_stundent?.stundents.length > 0
        ) {
            console.log('entro',data_stundent);
            setData_(data_stundent);
            //subir el scroll al inicio de ._container_student_list
            const container = document.querySelector('._container_student_list');
            container.scrollTop = 0;
        }

    }, [data_stundent]);


    return (
        <>
            <div className='_table_stundent_course'>
                <div className='_title_list_estundent'>
                    <h1>{ (data_.title !== '')? data_.title : 'List Stundent'}</h1>
                </div>
                <div className='_container_student_list'>
                    {
                        data_?.stundents.map((stundent) => (
                            <div onClick={() => {handleViewStundent(stundent, data_.title)}} className='_stundent' key={stundent.name}>
                                <div className='_container_img_'>
                                    <img src={stundent.img} alt='_' />
                                </div>
                                <h1>{stundent.name}</h1>
                            </div>
                        ))
                    }
                </div>
                {
                    (data_?.dataTeacher.length > 0) &&
                    (<><a onClick={ ()=> {setIsActived(true)}}>Teachers</a> 
                    { isActived &&
                     <ListTeacher callback={ (tag) => { setIsActived(tag) }} 
                                  ListTeacher={data_.dataTeacher}
                     />
                    }
                    </>)
                }
            </div>
        </>
    );

};


export default CardStudentList;