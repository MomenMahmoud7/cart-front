import React from 'react';
import { connect } from 'react-redux';
import SideBar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/Body/Body';
import FooterBar from './Components/FooterBar/FooterBar';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import { Sidebar } from 'semantic-ui-react'

class App extends React.Component {

    render() {

        const { sidebarCollapsed, showSidebar } = this.props;
        
        return (
            <div>
                <NavBar />
                <Sidebar.Pushable >
                    <SideBar />
                    <Sidebar.Pusher 
                        dimmed={'true' && sidebarCollapsed } 
                        onClick={sidebarCollapsed ? showSidebar : null}
                    >
                        <Body />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <FooterBar />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);