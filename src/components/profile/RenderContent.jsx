import React from 'react';
import { 
    Typography , 
    Button 
} from '@mui/material';


//components
const RenderContent = ({
    data_content,
}) => {

    //hooks
    const [ data , setData ] = React.useState({
            first_part: [
                {
                title: "",
                name: '',
                apellido: '',
                email: '',
                edad: 0,
                telefono: '',
                }
            ],
            second_part: [
                {
                    title: "",
                    name: '',
                    apellido: '',
                    email: '',
                    edad: 0,
                    telefono: '',
                },
            ]
    });


    const converAllOneObject = (_data) => {
    
        return _data?.reduce( (acc,element,index) => {
            return {
                ...acc,
                ...element,
            }
        }, {});

    }

    const converAllOneObject2 = (_data, data_filtrada) => {
        const data = _data?.reduce( (acc,element,index) => {
            if (index < (data_filtrada.length / 2)) {
                acc.first_part.push(element);
            } else {
                acc.second_part.push(element);
            }
            return acc;
        }
        ,{
            first_part: [],
            second_part: [],
        });

        return data;
    }


   React.useEffect(() => {

        const data = window.sessionStorage.getItem('data_stundent');

        if (window.sessionStorage.hasOwnProperty('data_stundent')) {

            let data_ = Object.entries((JSON.parse(data)).data);

            let data_filtrada = data_?.map( (element,index) => {
                
                const text_ = (element[0]).replace(/_/g, ' ');

                if (element[1] !== '') {
                    return {
                        [text_]: (element[1]),
                    }
                }
                //eliminar elementos vacios
                return null;
            }).filter( (element) => {
                return element !== null;
            });

            const data_partidad = converAllOneObject2(data_filtrada, data_filtrada);
            const first_part_array = converAllOneObject2(data_partidad.first_part, data_partidad.first_part);
            const second_part_array = converAllOneObject2(data_partidad.second_part, data_partidad.second_part);
        
            
            setData({
                first_part: [converAllOneObject(first_part_array.first_part), 
                             converAllOneObject(first_part_array.second_part)],
                second_part: [
                    converAllOneObject(second_part_array.first_part),
                    converAllOneObject(second_part_array.second_part)
                ],
            });

        }

   }, []);


  //render
  return (
    <>
      <section className='_container_profile_content_'>
        {
            (Object.entries(data)).map( (element,index) => (
                    <div className='_container_table_info' key={index}>
                        {
                            (element[1]).map( (element,index) => (
                                <div className='_container_table_content' key={index}>
                                    <div className='_table_header_'>
                                        <Typography variant="h1" component="div">
                                            {element.title? element.title : 'Personal Information'}
                                        </Typography>
                                        <Button disabled variant="contained" color="primary">
                                            Edit
                                        </Button>
                                    </div>
                                    <div className='_container_info_table'>
                                        {
                                            (Object.entries(element)).map( (element,index) => (
                                                <div className='_container_info_table_content' key={index}>
                                                    <Typography className='_atribute' variant="h1" component="div">
                                                        {
                                                          (element[0] !== undefined)? element[0] : ''
                                                        }
                                                    </Typography>
                                                    <Typography variant="h1" component="div">
                                                        {
                                                          (element[1] !== undefined)? String(element[1]) : ''
                                                        }
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            )
        }   
      </section>
    </>
  );
};

export default RenderContent;