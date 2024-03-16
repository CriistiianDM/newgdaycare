import { teal } from '@mui/material/colors';
import React from 'react';

//variable global
let data_section = sessionStorage.getItem('data');
const NAME_SEDE_KEY = 'homeroom';

let regex = /^(\{.*\}|\[.*\])$/
if (!data_section && !regex.test(data_section)) {
  console.log('No se ha cargado la información de los estudiantes');
}

/**
 * Get Data courses
 * @returns [{}]
 */
const getSedesCourses = () => {
  let data_section = sessionStorage.getItem('data');

  if (data_section && regex.test(data_section)) {
    let data_ = JSON.parse(data_section);
    //sacar los grupos de cada sede
    let aux_data = [];
    let img_index = 0;

    const imgIndex = {
      'Joyful': '1',
      'Dandy': '2',
      'Little': '3',
      'Safari': '4',
      'Jungle': '5',
      'Forest': '6',
      'After': '7'
    },
    regex = /-(.*?)\s/

    let data_sede = data_?.map((element, index) => {
      return {
        id: index,
        title: `NG ${index + 1}`,
        courses: element?.filter((group, index, arr) => {
          if (!aux_data.includes(group[NAME_SEDE_KEY]) &&
            group[NAME_SEDE_KEY] !== '') {
            aux_data.push(group[NAME_SEDE_KEY]);
            return 1;
          }
        }).map((group, index, arr) => {
          return {
            title: group[NAME_SEDE_KEY],
            img: `/assets/course/${Object.values(imgIndex[(group.homeroom).match(regex)[1]])[0]}.png`,
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
  homeroom = ''
}) => {
  try {
    let data_section = sessionStorage.getItem('data');
    let dataTeacher_section = sessionStorage.getItem('teachers');
    let data_ = JSON.parse(data_section);
    let dataTeacher_ = JSON.parse(dataTeacher_section);

    let data_general_stundents = data_[sede]?.filter((element_, index) => {
      return element_[NAME_SEDE_KEY] === homeroom;
    })

    let data = data_general_stundents?.map((element_, index) => {
      return {
        name: `${element_.first_name} ${element_.last_name}`,
        img: element_.photo ? element_.photo : '',
        data: element_
      }
    })

    return {
      stundents: data,
      title: homeroom,
      dataTeacher: dataTeacher_
    };
  }
  catch (error) {
    console.log(error);
  }
}

const getHeadquarters = () => {
  return [
    {
      id: 1,
      name: 'Bogotá',
    }
  ]
}

// Export Module
export {
  getHeadquarters,
  getSedesCourses,
  getStundentsBySede
};
