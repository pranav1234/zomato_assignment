import React, { Component } from 'react';
import { Container, Grid, Header, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    if (this.props.restaurantFetching) {
      return (
        <Dimmer active>
          <Loader inverted>Loading</Loader>
        </Dimmer>

      )
    }

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column color='red'>

            <Header as='h1' textAlign='center'>Zomato</Header>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <RestaurantList restaurants = {this.props.restaurants} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restaurantFetching: state.restaurantList.fetching,
    restaurants:state.restaurantList.restaurant
  }
};

export default connect(mapStateToProps, {})(App)

