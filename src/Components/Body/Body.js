import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import { Segment } from 'semantic-ui-react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Category from '../Category/Category';
import Cart from '../Cart/Cart';
import AddProduct from '../Add Product/Add Product';
import { mapStateToProps, mapDispatchToProps } from '../../Connect';

class Body extends Component {

    render() {
        const { products } = this.props

        return (
            <Segment 
                basic 
                style={{ 
                    minHeight:'640px',
                    marginTop:'72px',
                    border:'0', 
                    boxShadow:'none' 
                }}
            >
                <Route path='/home' render={() => <AddProduct />} />
                <Route path='/signin' render={() => <SignIn />} />
                <Route path='/signup' render={() => <SignUp />}/>
                { products.map(category => 
                    category.subCat.map(subCategory => 
                        <Route
                            key={subCategory.id}
                            path={`/${subCategory.name}`} 
                            render={() => 
                                <Category subCategory={subCategory}/>
                            }
                        />
                    )
                )}
                <Route path='/cart' render={() => <Cart />}/>
                <Route path='/add product' render={() => <AddProduct />}/>
            </Segment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);