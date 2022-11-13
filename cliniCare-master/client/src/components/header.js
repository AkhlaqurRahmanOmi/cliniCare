import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Button, Row, Col, Form, FormControl} from 'react-bootstrap';

const Header = ()  => {
    const [navbar, setNavbar] = useState()

    const changeBackground=()=>{

        if(window.scrollY >=10){
            setNavbar(true);
        }
        else{
            setNavbar(flase);
        }
    };
window.addEventListener('scroll', changeBackground);

    
    return (
        <div>
            <div className={navbar? 'nn active' : 'nn'}>
                <Row className="containerh">
<Col className="col1">
    <FontAwesomeIcon icon={faBars} size="2x" color={navbar ? 'black':"white"} id="baricon"/>
    <div className="nm">
        <div className={navbar ? 'disactive':'logo'}>
            <img alt="logo" src="images/fiverrlogo.png"/>
            <div className="dot"></div>
            </div>
            </div>
            <div className={navbar ? 'logo':'disactive'}>
                <img alt= "logo" src="images/blacklogo.png"/>
            </div>
            <div className={navbar ? 'searchBar': 'searchBar searchBarhide'}>
                <Form inline>
                    <img className="searchlogo" alt="logo" src="images/search.png"/> 
                    <FormControl type="text" placeholder="search" className="mr-lg-0"/>
                    <button className="btnn">Search</button>
                </Form>
            </div>
            </Col>
                <ul className="navigation">
                    <li className ="li">
                        <a className={navbar? 'linkcolor' : 'disactivecolor'} href="/">Fiverr Business</a>

                    </li>
                    <li className="sli">
                        <a className={navbar? 'linkcolor' : 'disactivecolor'} href="/">Explore</a>
                    </li>
                    <li className="sli">
                        <a className={navbar? 'linkcolor' : 'disactivecolor'} href="/">
                            <span className="global">
                                <img alt="logo" color="green" width="14px" height= "14px" src="img/globe.png"></img> 
                            </span>
                            <span>English</span>
                        </a>
                    </li>
                    <li className="tli">
                        <a className={navbar? 'linkcolor' : 'disactivecolor'} href="/">RsPKR</a>
                    </li>
                    <li>
                        <a className={navbar? 'linkcolor' : 'disactivecolor'} href="/">Become a seller</a>
                    </li>
                    <li className={navbar? 'singinli linkcolor' : 'singinli disactivecolor'}>
                        Sign In
                    </li>
                    <li className="bli">
                        <a href="/join">
                            <Button variant="outline-success">Join</Button>{' '}
                        </a>
                    </li>
                  </ul>
                </Row>
            </div>
        </div>
    );
};

export default Header;