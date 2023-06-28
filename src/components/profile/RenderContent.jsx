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
                title: "Personal Information",
                name: 'Juan',
                apellido: 'Pérez',
                email: 'juanperez@example.com',
                edad: 25,
                telefono: '555-1234',
                },
                {
                title: "Personal Information",
                name: 'María',
                apellido: 'González',
                email: 'mariagonzalez@example.com',
                edad: 30,
                telefono: '555-5678',
                },
            ],
            second_part: [
                {
                title: "Personal Information",
                name: 'John',
                apellido: 'Doe',
                email: 'johndoe@example.com',
                edad: 28,
                telefono: '555-4321',
                },
                {
                title: "Personal Information",
                name: 'Jane',
                apellido: 'Doe',
                email: 'janedoe@example.com',
                edad: 35,
                telefono: '555-8765',
                },
            ]
    });

    //useEffect
    React.useEffect(() => { 
        if (data_content) {
            setData({
                first_part: data_content.first_part,
                second_part: data_content.second_part,
            });
        }
    }, [ data_content ]);

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
                                            {element.title}
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
                                                        {element[0]}
                                                    </Typography>
                                                    <Typography variant="h1" component="div">
                                                        {element[1]}
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