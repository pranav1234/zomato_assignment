import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { Provider } from 'react-redux';
import { Route} from 'react-router';
import { BrowserRouter  } from "react-router-dom";
import  store from "./configureStore";  
import rootReducer from './reducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import {fetchInitialData} from './actions';

import { createStore, applyMiddleware } from 'redux';
const middlewares = [thunk];
middlewares.push(createLogger());



applyMiddleware(...middlewares)



const finalStore  = createStore(rootReducer,applyMiddleware(...middlewares));
finalStore.dispatch(fetchInitialData());
class App extends Component {
  render() {
    return (
        <Provider store={finalStore}>
          <BrowserRouter  >
            <Route path="/" component={Home} />
          </BrowserRouter>  
        </Provider>
    );
  }
}

export default App;
