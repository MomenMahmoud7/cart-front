import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import Slider from "react-slick";
import { Image } from 'semantic-ui-react';
import './Home.scss'

class Home extends Component {

    render() {

        const { advertisements } = this.props
        var settings = {
            dots: true,
            arrows:true,
            pauseOnHover:true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} className='slider-container'>
                {advertisements.map(advertisement =>
                    <Image key={advertisement.id} src={advertisement.image}></Image>
                )}
            </Slider>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);