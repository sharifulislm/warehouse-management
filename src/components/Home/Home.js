import React from 'react';
import Benner from '../Benner/Benner';
import ManageItem from '../Pages/ManageItem/ManageItem';
import Middlesection from '../Pages/Middlesection/Middlesection';
import Service from '../Service/Service';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Service></Service>

            <Middlesection></Middlesection> 
            {/* <ManageItem></ManageItem>     */}
            <Contact></Contact>
           
               
        </div>
    );
};

export default Home;