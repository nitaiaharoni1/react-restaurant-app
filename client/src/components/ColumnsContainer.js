import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function ColumnsContainer() {
    return (
        <Container className='mt-4'>
            <Row className='text-center'>
                <Col>
                    <h2>A DESTINATION</h2>
                </Col>
            </Row>
            <Row className='mt-3 text-left h-auto mb-4'>
                <Col className='mx-auto' md={5}>
                    <p>Praesent commodo cursus magna,
                        Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at
                        lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
                        consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero,
                        a pharetra augue. Cras justo odio, dapibus ac facilisis.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed
                        consectetur.
                    </p>
                </Col>

                <Col className='mx-auto' md={5}>
                    <p>Praesent commodo cursus magna,
                        Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                        euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                        fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
                        Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit
                        sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Integer posuere
                        erat a ante venenatis dapibus posuere velit luctus sem adipiscing elit.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}