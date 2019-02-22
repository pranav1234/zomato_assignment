
import React from 'react'
import Restaurant from "./Restaurant";
import { Container, Grid, Header, Dimmer, Loader } from 'semantic-ui-react';


const RestaurantList = (props) => (

    <Grid  columns={4} >
    <Grid.Row>
{    props.restaurants.map((item,index) => 
    
      <Grid.Column>
        <Restaurant restaurant= {item} />
      </Grid.Column>
      )
}
 
    </Grid.Row>


  </Grid>    

)

export default RestaurantList