import React from 'react';
import Table from './Table';

const ListTeacher  = ({
    callback,
    ListTeacher
}) => {

  const [dataMaestros_, setDataMaestros_] = React.useState([]);

  const closeModal = () => {
    callback(false);
    console.log('close', callback);
  }

   React.useEffect(() => {
        if(ListTeacher !== undefined && 
           ListTeacher !== null     && 
           ListTeacher !== '') {
            setDataMaestros_(ListTeacher);
        }
   }, [ListTeacher]);


  return (
    <>
       <section className="_container_list_teacher">
            <a onClick={closeModal} className='_close_modal' />
            <div>
                <Table 
                    data_header={["firtname", "lastname", "date_ini", "lessons" , "cpr","classroom"]}
                    data_cell={["firtname", "lastname", "date_ini", "lessons" , "cpr","classroom"]}
                    data_={dataMaestros_}
                />
            </div>
       </section>
    </>
  );
}

export default ListTeacher;