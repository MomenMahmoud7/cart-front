import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import { Menu, Sidebar, Accordion, Icon } from 'semantic-ui-react';
import './SideBar.scss';

class SideBar extends Component {
    render() {
        const {
            showCategory,
            categoryCollapsed,
            products,
            sidebarCollapsed,
            showSidebar
        } = this.props;

        return (
            <Sidebar
                as={Menu}
                inverted
                vertical
                animation='push'
                visible={sidebarCollapsed}
                className='sidebar-container'
            >
                {products.map(category => (
                    <Accordion key={category.id}>
                        <Accordion.Title className='sidebar-category'>
                            <Menu.Item
                                onClick={() => showCategory(category.id)}
                            >
                                {category.name}
                                <Icon
                                    name='angle down'
                                    className='category-icon'
                                />
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content
                            active={categoryCollapsed === category.id}
                            className='sidebar-subcategory'
                        >
                            {category.subCat.map(subCategory => (
                                <Menu.Item
                                    key={subCategory.id}
                                    as={Link}
                                    to={`/${category.name}/${subCategory.name}`}
                                    onClick={() => {
                                        showSidebar();
                                        showCategory('');
                                    }}
                                >
                                    {subCategory.name}
                                </Menu.Item>
                            ))}
                        </Accordion.Content>
                    </Accordion>
                ))}
            </Sidebar>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
