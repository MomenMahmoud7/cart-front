import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignUp from '../../SignUp/SignUp';
import SignIn from '../../SignIn/SignIn';
import Category from '../../Category/Category';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import Home from '../../Home/Home';
import { mapStateToProps } from './Connect';
import './Body.scss';

class Body extends Component {
    render() {
        const { products, signedIn, signedUp } = this.props;

        return (
            <div className='body-container'>
                <Switch>
                    <Route path='/home' exact render={() => <Home />} />
                    <Route
                        path='/signin'
                        exact
                        render={() =>
                            signedIn === true ? (
                                <Redirect to='/home' />
                            ) : (
                                <SignIn />
                            )
                        }
                    />
                    <Route
                        path='/signup'
                        exact
                        render={() =>
                            signedUp === true ? (
                                <Redirect to='/home' />
                            ) : (
                                <SignUp />
                            )
                        }
                    />
                    <Route path='/cart' render={() => <Cart />} />
                    {products.map(category =>
                        category.subCat.map(subCategory => (
                            <Route
                                key={subCategory.id}
                                path={`/${category.name}/${subCategory.name}`}
                                exact
                                render={() => (
                                    <Category
                                        category={category}
                                        subCategory={subCategory}
                                    />
                                )}
                            />
                        ))
                    )}
                    {products.map(category =>
                        category.subCat.map(subCategory =>
                            subCategory.products.map(product => (
                                <Route
                                    key={product.id}
                                    path={`/${category.name}/${
                                        subCategory.name
                                    }/${product.name}`}
                                    exact
                                    render={() => <Product product={product} />}
                                />
                            ))
                        )
                    )}
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Body);
