
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const RestaurantList = ({restaurant}) => (
  <Card>
      {  console.log('TCL: restaurant', restaurant)
}
    <Image src={restaurant.collection.image_url} />
    <Card.Content>
      <Card.Header>{restaurant.collection.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{restaurant.collection.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default RestaurantList