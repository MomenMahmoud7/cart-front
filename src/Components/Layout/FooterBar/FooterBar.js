import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import './FooterBar.scss';

class FooterBar extends Component {
    render() {
        return <Segment inverted basic className='footerbar-container' />;
    }
}

export default FooterBar;
