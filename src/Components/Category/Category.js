import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Card, Icon, Segment, Image, Header } from 'semantic-ui-react'
import { mapStateToProps, mapDispatchToProps } from '../../Connect';


class Home extends Component {
    
    render() {
      	const {
			subCategory,
			addItem,
		} = this.props
        return (
            <Segment 
              	basic 
            >
				<Card.Group centered>
					{subCategory.products.map((product) =>
						<Card key={product.id} raised style={{width:'264px'}}>
							<Card.Content>
								<Image src={product.image}/>
								<Header size='small'>{product.name}</Header>
							</Card.Content>
							<Button 
								as={Link} 
								to='cart' 
								secondary 
								icon 
								animated='vertical' 
								size='large'
								onClick={() => addItem(product)}
								style={{backgroundColor:'rgb(40, 40, 40)'}}
							>
								<Button.Content hidden>
									<Icon name='shop'/> Add to Cart
								</Button.Content>
								<Button.Content visible>
									{product.price} &nbsp; EGP
								</Button.Content>
							</Button>
						</Card>
					)}
				</Card.Group>
            </Segment>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);