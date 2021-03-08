import React from "react";
import './Footer.scss';
import {Row, Col, Container} from 'react-bootstrap'
import Images1 from '../../assets/imgs/images1.svg';
import Images2 from '../../assets/imgs/images2.svg';
import Images3 from '../../assets/imgs/images3.svg';
import Images4 from '../../assets/imgs/footer-mage.svg';



export default function Footer(props) {
    return (
        <>
            <section>
                <div className="navfooterr">
                    <Container>
                        <Row>
                            <Col md="8" sm="12 " className="foote">
                                <div className="footer-de">Let's keep in touch</div>
                                <a href="#!"><img className="images_sets" src={Images1} alt="filterland" /></a>
                                <a href="#!" className="ac-h"> <span><img className="images_sets" src={Images2} alt="filterland" /></span></a>
                                <a href="#!"><span><img className="images_sets" src={Images3} alt="filterland" /></span></a>

                            </Col>
                            <Col md="2" sm="12" className="ces">
                                <div className="footer-des">Useful Links</div>
                                <div>
                                    <div className="list-unstyled">
                                        <a href="#!">About Us</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Blog</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Use Cases</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Contact Us</a>
                                    </div>
                                </div>
                            </Col>
                            <Col md="2" className="ces">
                                <div className="footer-des">Resources</div>
                                <div>
                                    <div className="list-unstyled">
                                        <a href="#!">About Us</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Blog</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Use Cases</a>
                                    </div>
                                    <div className="list-unstyled">
                                        <a href="#!">Contact Us</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <>
                    <div className="footer_img_rwapper">
                        <div className="footer-imss"><img src={Images4} alt="filterland" /></div>
                        <div className="footer-d">© 2021 Filterland Sales.</div>
                    </div>
                </>
               
            </section>
        </>
    )

}
  
