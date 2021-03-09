import React, {useState} from "react";
import './Modal.scss'
import {Button, Modal, Col, Row, Form} from 'react-bootstrap';
import RequestImage from '../../assets/imgs/request-sale.svg';
let sectionStyle = {
    width: "100%",
    height: "430px",
    backgroundImage: `url(${RequestImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

function Modals(props) {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Button  className="watch-demo" onClick={() => setLgShow(true)}>Request Access</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
                    <Row>
                        <Col md="6" sm="12">
                            <div style={ sectionStyle }></div>
                        </Col>
                        <Col md="6" sm="12"> 
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
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modals