import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class FooterBar extends Component {

    render() {
        return (
            <Segment 
                inverted
                basic
                style={{
                    height:'96px',
                    padding:'12px',
                    margin:'0',
                    paddingLeft:'10%',
                    paddingRight:'10%',
                    backgroundColor: 'rgb(40, 40, 40)',
                }}
            >
            </Segment>
        );
    }
}

export default FooterBar;