//import libraries
import React from 'react';
import CardCourse from './CardCourse';
import CardStudentList from './CardStudentList';
import { getSedesCourses , getStundentsBySede } from '../../backend/RoutesGeneral';



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
        ],
        data: [

        ]
   });

   const [dataSedes, setDataSedes] = React.useState([]);
   const [dataSelect, setDataSelect] = React.useState({
        sede: 0,
        homeroom: ''
   });

   React.useEffect(() => {
        setDataSedes(getSedesCourses());
   }, []);


   React.useEffect(() => {
        setData(getStundentsBySede(dataSelect));
   }, [dataSelect]);

   return (
        <>
            <main className='_container_groups'>
                <section className='_group'>
                    <CardCourse setDataSelect={setDataSelect} 
                                data_courses={dataSedes} />
                </section>
                <section className='_group'>
                    <CardStudentList data_stundent={data_} />
                </section>
            </main>
        </>
   )

};


export default GroupStundent;