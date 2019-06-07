import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/Layout/NavBar/NavBar';
import SideBar from '../Components/Layout/SideBar/SideBar';
import Body from '../Components/Layout/Body/Body';
import FooterBar from '../Components/Layout/FooterBar/FooterBar';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import { Sidebar } from 'semantic-ui-react';
import '../Styles/styles.scss'

class App extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchAdvertisements();
        this.props.fetchUserData();
        this.props.setUserStatus();
    }

    render() {

        const { sidebarCollapsed, showSidebar, showCategory } = this.props;

        return (
            <div>
                <NavBar />
                <Sidebar.Pushable>
                    <SideBar />
                    <Sidebar.Pusher
                        dimmed={'true' && sidebarCollapsed}
                        onClick={() => {
                            if (sidebarCollapsed) {
                                showSidebar();
                                showCategory('');
                            }
                        }}
                    >
                        <Body />
                        <FooterBar />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);