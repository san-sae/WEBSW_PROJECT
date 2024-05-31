import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from '../../component/Nav';
import Row from '../../component/Row';
import Header from '../../component/Header';
import Bar from '../../component/Bar';
import Review from '../../component/Review';
import './Home.css'; 

const Home = () => {
    
    return (
        <div className='container'>
            <Nav></Nav>
            <Bar></Bar>
            <Row></Row>
            <Header></Header>
            <Review></Review>
        </div>
    );
};

export default Home;
