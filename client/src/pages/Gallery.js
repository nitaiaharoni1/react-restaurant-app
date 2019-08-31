import React, {Component} from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from "../assets/home_top.jpg";
import GridList from "@material-ui/core/GridList";
import img from '../assets/card_home_1.jpg'
import GridListTile from "@material-ui/core/GridListTile";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

class Gallery extends Component {
    state = {
        imgs: [],
        loading: true,
        width: window.innerWidth
    };

    async componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({width: window.innerWidth});
        });

        const res = await fetch('/api/gallery');
        const images = (await res.json()).images;
        await images.forEach((obj) => {
            obj.img = 'data:image/jpeg;base64,' + obj.img;
            this.setState({imgs: [...this.state.imgs, obj]})
        });
        this.setState({loading: false})
    }

    render() {
        const col = this.state.width > 700 ? 3 : 2;
        const gallery = this.state.loading ?
            <Container style={{height: 400}} className='text-center align-middle my-5 Gallery'>
                <Spinner animation="border" role="status"/>
            </Container>
            :
            <div className='d-flex justify-content-around overflow-hidden Gallery'>
                <GridList className='m-lg-5 p-lg-3 m-sm-2 p-sm-2 m-2 p-2' cellHeight={Math.floor(this.state.width / col)} cols={col}>
                    {this.state.imgs.map(img => (
                        <GridListTile key={img.key} cols={img.cols || 1}>
                            <img src={img.img}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>;

        return (
            <React.Fragment>
                <CustomParallax title='Gallery' img={home_top} height={300}/>
                {gallery}
            </React.Fragment>
        );
    }
}

export default Gallery;