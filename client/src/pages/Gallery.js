import React, {Component} from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from "../assets/home_top.jpg";
import GridList from "@material-ui/core/GridList";
import img from '../assets/card_home_1.jpg'
import GridListTile from "@material-ui/core/GridListTile";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: [],
            width: window.innerWidth
        };
        window.addEventListener("resize", () => {
            this.setState({width: window.innerWidth});
        });
    }

    async componentDidMount() {
        const res = await fetch('/api/gallery', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const images = (await res.json()).images;
        images.forEach((obj) => {
            obj.img = 'data:image/jpeg;base64,' + obj.img;
            this.setState({imgs: [...this.state.imgs, obj]})
        })
    }

    render() {
        const col = this.state.width > 700 ? 3 : 2;

        return (
            <React.Fragment>
                <CustomParallax title='Gallery' img={home_top} height={300}/>
                <div className={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden'}}>
                    <GridList className='m-lg-5 p-lg-3 m-sm-2 p-sm-2 m-2 p-2' cellHeight={Math.floor(this.state.width / col)} cols={col}>
                        {this.state.imgs.map(img => (
                            <GridListTile key={img.key} cols={img.cols || 1}>
                                <img src={img.img}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;