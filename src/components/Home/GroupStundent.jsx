//import libraries
import React from 'react';
import CardCourse from './CardCourse';
import CardStudentList from './CardStudentList';
import ListTeacher from './ListTeacher';
import { getSedesCourses , getStundentsBySede } from '../../backend/RoutesGeneral';



//import components
const GroupStundent = () => {

   const [data_, setData] = React.useState({
        title: '',
        stundents: [],
        data: [],
        dataTeacher: []
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
                <section id="list-html" className='_group _display-none'>
                    <CardStudentList data_stundent={data_} />
                </section>
            </main>
        </>
   )

};


export default GroupStundent;