import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Jumbo from './Jumbo'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbo title={} text={} img={}/>
                <Container className='text-center my-auto justify-content-center'
                           style={{'height': 700, minHeight: 700}}>
                    <h2 className=''>A DESTINATION</h2>
                    <p className=''>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel
                        augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                </Container>
                <Jumbo title={} text={} img={} button={}/>

            </React.Fragment>

        );
    }
}

export default Home;