import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Button, Row, Col, Form, FormControl} from 'react-bootstrap';

const Header = ()  => {
    return (
        <div>
            <div>
                <Row className="containerh">
<Col className="col1">
    <FontAwesomeIcon icon={faBars} size="2x" color="black" id="baricon"/>
    <div className="nm">
        <div>

        </div>
    </div>
</Col>
                </Row>
            </div>
        </div>
    )
}

export default Header;