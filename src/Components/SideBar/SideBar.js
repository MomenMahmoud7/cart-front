import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Connect';
import { Menu, Sidebar, Accordion } from 'semantic-ui-react'

class SideBar extends Component {

    render() {

        const {
            showCategory,
            categoryCollapsed,
            products,
            sidebarCollapsed,
            showSidebar,
        } = this.props;
        
        return (
            <Sidebar
                as={Menu}
                inverted
                vertical
                width='thin'
                animation='push'
                visible={sidebarCollapsed}
                style={{ 
                    paddingTop:'64px',
                    backgroundColor: 'rgb(50, 50, 50)',
                    boxShadow:'0 0 8px rgb(40, 40, 40, 0.8)' 
                }}
            >
                { products.map((category) => 
                    <Accordion key={category.id} inverted>
                        <Accordion.Title>
                            <Menu.Item onClick={() => showCategory(category.id)} >
                                {category.name}
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={categoryCollapsed === category.id}>
                            { category.subCat.map((subCategory) => 
                                <Menu.Item 
                                    key={subCategory.id}
                                    as={Link}
                                    to={subCategory.name}
                                    onClick={showSidebar}
                                >
                                    {subCategory.name}
                                </Menu.Item>
                            )}
                        </Accordion.Content>
                    </Accordion>
                )}
            </Sidebar>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);