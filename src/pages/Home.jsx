//import libraries
import React from 'react';
import Header from '../components/Home/Header';
import GroupStundent from '../components/Home/GroupStundent';

const Home = () => {

    // const [data, setData] = React.useState([]);

    // React.useEffect(() => {
    //   fetchData();
    // }, []);
  
    // async function fetchData() {
    //   try {
    //     const response = await fetch('https://script.google.com/macros/s/AKfycbyh-45hwWOHzfwzNS25zViOTkBb6D9U4QFqp5wn0FOQmtijviE4c1adEC7NvmvbmqSl/exec');
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // }

    return (
        <>
            <Header />
            <GroupStundent />
        </>
    );

};


export default Home;