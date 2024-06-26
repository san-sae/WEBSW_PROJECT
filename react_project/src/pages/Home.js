import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from './../component/Nav';
import Row from './../component/Row';
import Header from './../component/Header';
import Bar from './../component/Bar';
import Review from './../component/Review';
import './Home.css'; 

const Home = () => {
    
    return (
        <div className='contain'>
            <Nav></Nav>
            <Bar></Bar>
            <Review></Review>
            <Row></Row>
            <Header></Header>
            
        </div>
    );
};

export default Home;
