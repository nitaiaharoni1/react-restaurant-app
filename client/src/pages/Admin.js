import React, { Component } from 'react';
import ReactJson from "react-json-view";
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import { connect } from "react-redux";
import { getAdminData } from "../utils/api";
import { Container } from "react-bootstrap";

class Admin extends Component {
    state = {
        json: {}
    };

    async componentDidMount() {
        if (this.props.email === 'admin' && this.props.loggedIn) {
            const json = (await getAdminData(this.props.email, this.props.loggedIn)).data;
            this.setState({json: json});
        }
    }

    render() {
        return (
            <>
                <CustomParallax title='Admin Page' img={home_top} height='20em'/>
                <Container>
                    <h2>Database JSON</h2>
                    <ReactJson src={this.state.json} theme="rjv-default" displayDataTypes={false} enableClipboard={false}
                               collapseStringsAfterLength={20}/>
                </Container>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        email: state.user.email
    }
};

export default connect(mapStateToProps, null)(Admin)