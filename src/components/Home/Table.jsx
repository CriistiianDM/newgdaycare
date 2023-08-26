import React from "react";

const Table = ({
    data_header,
    data_cell,
    data_
}) => {

    const [data, setData] = React.useState([]);
    const [dataHeader, setDataHeader] = React.useState([]);
    const [dataCell, setDataCell] = React.useState([]);

    React.useEffect(()=> {
        if(data_ && data_ !== undefined) {
            setData(data_)
            setDataHeader(data_header)
            setDataCell(data_cell)
        }
    },[data_, data_header])

    return (
        <>
           <table>
                <thead>
                    <tr>
                        { dataHeader.map((row, index) => (
                            <th key={index}>{row}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {dataCell.map((cell, index) => (
                                <td key={index}>{row[cell]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
           </table>
        </>
    )

}

export default Table;