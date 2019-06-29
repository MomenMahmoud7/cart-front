import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Card, Select } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from './Connect';
import './AddProduct.scss';

class AddProduct extends Component {
    render() {
        const { products, selectCategory, categorySelected } = this.props;
        return (
            <Card raised fluid className='addproduct-card'>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Product Name'
                            placeholder='Product Name'
                            type='text'
                        />
                        <Form.Input label='Price' placeholder='Price' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            onChange={selectCategory}
                            control={Select}
                            label='Category'
                            placeholder='Category'
                            options={products.map(category => ({
                                key: category.id,
                                text: category.name,
                                value: category.name
                            }))}
                        />
                        <Form.Input
                            control={Select}
                            options={
                                categorySelected === 0
                                    ? [
                                          {
                                              text: 'Select Category',
                                              value: 'Select Category'
                                          }
                                      ]
                                    : products
                                          .filter(
                                              category =>
                                                  category.name ===
                                                  categorySelected
                                          )[0]
                                          .subCat.map(subCategory => ({
                                              key: subCategory.id,
                                              text: subCategory.name,
                                              value: subCategory.name
                                          }))
                            }
                            label='Sub Category'
                            placeholder='Sub Category'
                        />
                    </Form.Group>
                    <Form.Input
                        label='Description'
                        placeholder='Description'
                        type='text'
                    />
                    <Form.Input label='Product Image'>
                        <Button
                            as='label'
                            htmlFor='file'
                            icon='angle up'
                            labelPosition='right'
                            color='google plus'
                            content='Upload'
                        />
                        <input id='file' hidden type='file' />
                    </Form.Input>
                    <Button
                        icon='add'
                        labelPosition='right'
                        color='blue'
                        content='Add Product'
                    />
                </Form>
            </Card>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProduct);
