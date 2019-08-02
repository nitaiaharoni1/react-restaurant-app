import React, {Component} from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from "../assets/home_top.jpg";
import GridList from "@material-ui/core/GridList";
import img from '../assets/card_home_1.jpg'
import GridListTile from "@material-ui/core/GridListTile";

const tileData = [
    {
        img: img,
        cols: 1,
    }, {
        img: img,
        cols: 3,
    }, {
        img: img,
        cols: 2,
    }, {
        img: img,
        cols: 2,
    }, {
        img: img,
        cols: 3,
    }

];

class Gallery extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Gallery' img={home_top} height={300}/>
                <div className={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                }} >
                    <GridList className='m-5 p-5' cellHeight={350} cols={6}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;