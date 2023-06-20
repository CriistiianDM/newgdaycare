//import libraries
import React from 'react';
import { Button } from '@mui/material';
import CardCourse from './CardCourse';
import CardStudentList from './CardStudentList';

const data = [
    {
        id: 1,
        title: 'NG 1',
        courses: [
            {
                id: 1,
                title: 'Course 1',
                img: '/assets/course/1.png'
            },
            {
                id: 2,
                title: 'Course 2',
                img: '/assets/course/2.png'
            },
            {
                id: 3,
                title: 'Course 3',
                img: '/assets/course/3.png'
            },
            {
                id: 4,
                title: 'Course 4',
                img: '/assets/course/4.png'
            },
            {
                id: 5,
                title: 'Course 5',
                img: '/assets/course/5.png'
            }
        ]
    }
];


//import components
const GroupStundent = () => {

    const [data_, setData] = React.useState({
        title: '',
        stundents: [
            {
                name: 'name 1 apellido 1',
                img: '/assets/stundent/dafaul_profile.png'

            },
            {
                name: 'name 2 apellido 2',
                img: '/assets/stundent/dafaul_profile.png'
            },
            {
                name: 'name 3 apellido 3',
                img: '/assets/stundent/dafaul_profile.png'
            },
            {
                name: 'name 4 apellido 4',
                img: '/assets/stundent/dafaul_profile.png'
            }
        ]
    });

   return (
        <>
            <main className='_container_groups'>
                <section className='_group'>
                    <CardCourse data_courses={data} />
                </section>
                <section className='_group'>
                    <CardStudentList data_stundent={data_} />
                </section>
            </main>
        </>
   )

};


export default GroupStundent;