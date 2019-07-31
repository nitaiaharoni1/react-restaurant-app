import React, { Component } from 'react';
import ParallaxCustom from '../components/ParallaxCustom';
import pic from '../assets/about_img.jpg'
import Container from "react-bootstrap/Container";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Arcu cursus vitae congue mauris rhoncus aenean vel. Etiam erat velit scelerisque in. Semper quis lectus nulla at volutpat diam ut. Nibh sed pulvinar proin gravida hendrerit lectus. Nisl nisi scelerisque eu ultrices. Sit amet justo donec enim diam vulputate ut pharetra. Congue eu consequat ac felis donec et odio pellentesque.\n" +
    "\n" +
    "Urna neque viverra justo nec ultrices dui. Iaculis urna id volutpat lacus laoreet non. Eget dolor morbi non arcu risus quis varius. Feugiat in fermentum posuere urna nec tincidunt. Ut sem nulla pharetra diam sit amet. Vitae justo eget magna fermentum iaculis eu non diam. Pretium vulputate sapien nec sagittis. Malesuada bibendum arcu vitae elementum curabitur vitae. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Amet massa vitae tortor condimentum lacinia quis vel eros. Nec ultrices dui sapien eget mi proin.\n" +
    "\n" +
    "Turpis egestas integer eget aliquet nibh praesent tristique magna. Etiam non quam lacus suspendisse faucibus interdum posuere. Nibh sit amet commodo nulla. Semper auctor neque vitae tempus. Tincidunt praesent semper feugiat nibh. Viverra adipiscing at in tellus integer feugiat. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Mauris rhoncus aenean vel elit scelerisque mauris. Felis donec et odio pellentesque diam. Eu mi bibendum neque egestas congue quisque egestas diam in. Sit amet porttitor eget dolor morbi non. Elementum curabitur vitae nunc sed. Enim sit amet venenatis urna cursus. Cursus metus aliquam eleifend mi in nulla posuere. Ac turpis egestas maecenas pharetra. In ornare quam viverra orci. Scelerisque viverra mauris in aliquam sem fringilla. Egestas egestas fringilla phasellus faucibus scelerisque.\n" +
    "\n" +
    "Non blandit massa enim nec. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Feugiat nisl pretium fusce id velit ut. Magna eget est lorem ipsum dolor sit. Orci porta non pulvinar neque laoreet. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Quis eleifend quam adipiscing vitae. Feugiat vivamus at augue eget arcu dictum varius. Ut etiam sit amet nisl purus in mollis nunc. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Porttitor eget dolor morbi non arcu risus quis varius quam. Volutpat odio facilisis mauris sit amet massa vitae tortor. Elementum integer enim neque volutpat ac tincidunt vitae semper. Nunc sed velit dignissim sodales. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Faucibus vitae aliquet nec ullamcorper sit amet. Mattis pellentesque id nibh tortor id aliquet lectus proin.\n" +
    "\n" +
    "Amet nisl purus in mollis. Pharetra convallis posuere morbi leo. Id ornare arcu odio ut sem. Fermentum et sollicitudin ac orci. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Sed sed risus pretium quam vulputate. Interdum varius sit amet mattis. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Morbi quis commodo odio aenean sed adipiscing diam donec. Senectus et netus et malesuada fames ac turpis egestas. Proin sed libero enim sed. Elementum sagittis vitae et leo. Ut diam quam nulla porttitor massa. Ipsum dolor sit amet consectetur adipiscing elit. Vitae aliquet nec ullamcorper sit amet risus nullam. Ornare massa eget egestas purus. Est ultricies integer quis auctor elit sed vulputate. Aliquam ut porttitor leo a diam sollicitudin tempor id. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Pretium quam vulputate dignissim suspendisse in est ante in nibh."

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <ParallaxCustom/>
                <Container>
                    <p>{text}</p>
                </Container>
            </React.Fragment>
        );
    }
}

export default About;