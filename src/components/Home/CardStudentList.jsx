//import libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';


const CardStudentList = ({
    data_stundent,
}) => {

    const [data_, setData_] = React.useState({
        title: '',
        stundents: []
    });
    const navigate = useNavigate();

    const handleViewStundent = () => {
        navigate('/profile');
    };

    React.useEffect(() => {
        setData_(data_stundent);
    }, [data_stundent]);

    return (
        <>
            <div className='_table_stundent_course'>
                <div className='_title_list_estundent'>
                    <h1>List Stundent</h1>
                </div>
                <div className='_container_student_list'>
                    {
                        data_.stundents.map((stundent) => (
                            <div onClick={handleViewStundent} className='_stundent' key={stundent.name}>
                                <div className='_container_img_'>
                                    <img src={stundent.img} alt='_' />
                                </div>
                                <h1>{stundent.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );

};


export default CardStudentList;