import React from 'react';

//variable global
const data_section = sessionStorage.getItem('data');
const NAME_SEDE_KEY = 'homeroom';

let regex = /^(\{.*\}|\[.*\])$/
if (!data_section && !regex.test(data_section)) {
    //alert('No se ha cargado la información de los estudiantes')
}

const RoutesGeneral = () => {
  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
};


const getSedesCourses = () => {
    
      if (data_section && regex.test(data_section)) {
          let data_  = JSON.parse(data_section);

          //sacar los grupos de cada sede
          let aux_data = '';
          let img_index = 0;
          let data_sede = data_?.map( (element,index) => {
          return {
              id: index,
              title: `NG ${index + 1}`,
              courses: element?.filter((group, index, arr) => {

                          if (aux_data !== group[NAME_SEDE_KEY]) {
                                aux_data = group[NAME_SEDE_KEY];
                                return 1;
                          }

              }).map((group, index, arr) => {
                
                if (img_index <= 5) {
                  img_index++;
                }
                else {
                  img_index = 1;
                }

                return {
                  title: group[NAME_SEDE_KEY],
                  img: `/assets/course/${img_index}.png`,
                  id: index
                }

              })

          }

        })

        return data_sede; 
        
      }
}


const getStundentsBySede = ({
  sede = 0,
  homeroom = 'NG1-Forest Land 1'
}) => {

  try {
      
      let data_  = JSON.parse(data_section);
      
      let data_general_stundents = data_[sede]?.filter((element_, index) => {
            return element_[NAME_SEDE_KEY] === homeroom;
      })

      let data = data_general_stundents?.map((element_, index) => {
            return {
                name: `${element_.first_name} ${element_.last_name}`,
                img: element_.photo,
                data: element_
            }
      })

      return {  
           stundents: data,
           title: homeroom, 
      };

  }
  catch (error) {
       console.log(error);
 }

}
//getStundentsBySede({})

const getHeadquarters = () => {

    return [
        {
            id: 1,
            name: 'Bogotá',
        }
    ]

}

export default RoutesGeneral;
export { getHeadquarters 
        , getSedesCourses
        , getStundentsBySede
};
