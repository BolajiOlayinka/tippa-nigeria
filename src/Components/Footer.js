import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';
// import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
            
            <div className="container text-center d-lg-block pt-lg-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="row" >
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                <Link to ="/">
                        <img src={logo} alt="store" className="navbar-brand"/><br/>
                    </Link>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <p className="text-justify">Zinn is a food stuff company delivering Nigerian agro allied foodstuff packaged to your specification any where in the world</p> 
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <p>Site Map</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <p>My Accounts</p>
                    <p>Support</p>
                    <p>Corporate Responsibility</p>
                    <p>FAQs</p>
                </div>
                <div className="col-lg-3 mx-auto col-md-3 col-sm-6 col-6">
                    <p>Contact Us</p>
                    <p>Address:</p>
                    <p>Phone Number:</p>
                    <p>Email Address:</p>
                </div>
                <div className="col-lg-3 mx-auto col-md-3 col-sm-6 col-6">
                    <p>Contact Us</p>
                    <p>Address:</p>
                    <p>Phone Number:</p>
                    <p>Email Address:</p>
                </div>
                </div>
                
            </div>
            </div>
            </div>
        </div>
             
            </FooterWrapper>
                
            
        )
    }
}

const FooterWrapper = styled.nav `

background:var(--lightBack);
padding-top:5em!important;
    padding-bottom:5em!important;
    padding-left:50px;
padding-right:50px;
.navbar{
    margin-bottom:0px!important;
    
}
.nav-Link{
    color:var(--mainBlue)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
.shift-left{
    padding-left:-15px!important;
}
p{
    color:var(--mainBlue)!important;
    font-size:1rem;
    width:100%;
    text-align:justify;
    margin-top:1em;
    margin-bottom:1em;
    
}
`