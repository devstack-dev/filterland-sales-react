import React from "react";
import './LandingPage.scss';
import {Row, Col, Button, Container, Form } from 'react-bootstrap';
import PhoneAnimation from '../../assets/imgs/phone-animation1.svg';
import LaptopAnimation from '../../assets/imgs/laptop-animation.svg';
import Bgrond from '../../assets/imgs/bg-sec.svg';
import Bgrond2 from '../../assets/imgs/bg-ecclip.svg';
import Bgrond3 from '../../assets/imgs/offline-online.svg';
import Bgrond4 from '../../assets/imgs/salestracking.svg';
import Bgrond5 from '../../assets/imgs/crmphone.svg';
import Bgrond6 from '../../assets/imgs/imgsets.svg';
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../assets/imgs/whatsapp.svg';
import Modal from '../../components/Modals/Modal';
import RequestImage from '../../assets/imgs/request-sale.svg';
let sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${RequestImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };


export default function Box1(props) {
    return (
        <>
            <section className="container2">
                <Container >
                    <Row classNam="row-section">
                        <Col md="6" sm="12">
                            <div className="filter-cont">Get back to growth with the Nigeria’s #1 CRM, powered  by Filterland</div>
                            <div className="flter-emp des_online">Empower your sales force with the right customer data with all your sales channels in one place</div>
                            <Button className="start-free">Start My Free Trial</Button>
                            <spand className="watch_span"><Modal /></spand>
                        </Col>
                        <Col md="6" sm="12" >
                            <div className="foneset">
                                <div className="animatp"><img src={PhoneAnimation} alt="filterland"  width="100%"/></div>
                                <div className="animation"><img src={LaptopAnimation} alt="filterland"  width="100%"/></div>
                            </div> 
                        </Col>
                    </Row>
                    
                    
                </Container>
                 <a
                    href="https://wa.me/+2348125952646"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Whatsapp} alt="whatsapp" className="whatsapp-icon" />
                </a>
            </section>
            <section id="box_wrapper">
                <div className="section_content2">
                    <div className="filterlandsals">What’s new at Filterland Sales?</div>
                    <div className="bg-section">
                        
                        <div className="first-bg">
                            <img src={Bgrond} alt="filterland" />
                        </div>
                        <div className="second-bg">
                            <img src={Bgrond2} alt="filterland" />
                        </div>
                    </div>
                </div>
                <Container className="bg-whie">
                    <Row className="row-section">
                        <div className="wro_wrapper">
                            <Col md="5" sm="12" className="col-imgs">
                                <div>
                                    <img src={Bgrond3} alt="filterland" width="100%" />
                                </div>
                            </Col>
                            <Col md="7" sm="12">
                                <div className="ty_tr">
                                    <div className="oflin_online rewt">Work offline.</div>
                                    <div className="oflin_online">No internal Required</div>
                                    <div className="des_online">
                                        Low running cost as internet services are not required to maintain business processes and 
                                        ensure optimal performance results from your sales representatives and business development team
                                    </div>
                                
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row className="row-section1">
                        <div className="wro_wrapper1">
                            <Col md="8" sm="12" className="col-imgs">
                                <div className="">
                                    <div className="oflin_online rewt">Manage, Track Sales activities</div>
                                        <div className="oflin_online">accross different branches.</div>
                                        <div className="des_online">
                                            Ensuring real time tracking of sales activities across different branches, 
                                            sales channels and customers to mitigate internal fraudulant activities by sales representatives 
                                            and enforce integrity in your business
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" sm="12">
                                <div>
                                    <img className="rewt" src={Bgrond4} alt="filterland" width="" />
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <div>
                        <div className="filterlandsals">Our Solutions</div>
                        <div className="packages_sales">
                            <div className="packages_sales des_online">
                                sales is a smart sales analysis app that allows small and medium scale businesses to manage their inventories, customers, expenses 
                                and a lot more, to give a total business management package all on the go.
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <Row className="row-section2">
                        <Col md="8" sm="12" className="col-imgs">
                            <div className="bus_content">
                                <div className="oflin_online">Customer Relation </div>
                                <div className="oflin_online">Management.</div>
                                <div className="des_online">
                                    Manage your customers at the comfort of your smart phone at any location and ensure maximum quality assurance for 
                                    solutions delivered and enable smooth scalability and growth
                                </div>
                            </div>
                        </Col>
                        <Col md="4" sm="12">
                            <div>
                                <img src={Bgrond5} alt="filterland" width="" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-section3">
                        <Col md="5" sm="12" className="col-imgs">
                            <div>
                                <img src={Bgrond6} alt="filterland" width="" />
                            </div>
                        </Col>
                        <Col md="7" sm="12">
                            <div className="bus_conten">
                                <div className="oflin_online">Grow your sales using </div>
                                <div className="oflin_online"> Data Analytics.</div>
                                <div className="des_online">
                                    Manage your customers at the comfort of your smart phone at any location and ensure maximum quality assurance for solutions 
                                    delivered and enable smooth scalability and growth
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section  className="bg-bg ">
                <div  className="container cty">
                <Row >
                    <Col md="6" sm="12" className="bg-white">
                        <div style={ sectionStyle }></div>
                    </Col>
                    <Col md="6" sm="12" className="bg-white"> 
                    <div className="rr_aa form_sec">Request Access</div>
                    <div className="fill_moda form_sec">Kindly fill the form below and we will get back to you as soon as possible.</div>
                    <Form className="form_sec">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company Name:</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label size="sm">Email</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="" />
                        </Form.Group>
                        <Button className="submit_btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                </div>
            </section>
            <section>
                <div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
 