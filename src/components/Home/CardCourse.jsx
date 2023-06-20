//import library
import React from 'react';
import { Button } from '@mui/material';

const CardCourse = ({
    data_courses
}) => {

    const [data, setData] = React.useState([]);


    React.useEffect(() => {
        setData(data_courses);
    }, [data_courses]);

    return (
        <>
            {data.map((group) => (
                        <React.Fragment key={group.id}>
                            <div className='_title_sede'>
                                <h1>{group.title}</h1>
                            </div>
                            <div className='_container_courses'> 
                            {group.courses.map((course) => (
                                <div className='_course' key={course.id}>
                                    <div className='_container_img_'>
                                        <img src={course.img} alt='_' />
                                    </div>
                                    <h1>{course.title}</h1>
                                    <div className='_actions'>
                                        <Button
                                            sx={{
                                                backgroundColor: 'var(--color-radiu-primary)',
                                                height: '3em',
                                            }}
                                            variant="contained"> View Stundents</Button>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </React.Fragment>
            ))}
        </>
    )

};

export default CardCourse;