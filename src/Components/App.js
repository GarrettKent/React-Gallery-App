import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Gallery from './Gallery';
import Error from './Error';
import apiKey from '../config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true,
      basketballPictures: [],
      baseballPictures: [],
      footballPictures: [],
      query: ""
    };
  } 
  componentDidMount() {
    this.performSearch();
    this.basketballSearch();
    this.baseballSearch();
    this.footballSearch();
  }
  performSearch = (query = "hockey") => {
    this.setState({ loading: true})
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`) 
      .then(response => response.json())
      .then(response => {
        this.setState({ pictures: response.photos.photo, query:query, loading:false})
      })
      .catch(error => { console.log('It appears there was an error', error) });
  }
  basketballSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=basketball&per_page=24&format=json&nojsoncallback=1`) 
      .then(response => response.json())
      .then(response => {
        this.setState({ basketballPictures: response.photos.photo})
      })
      .catch(error => { console.log('It appears there was an error', error) });
  }
  baseballSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=baseball&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(response => {
        this.setState({ baseballPictures: response.photos.photo})
      })
      .catch(error => { console.log('It appears there was an error', error) });
  }
  footballSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=football&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(response => {
        this.setState({footballPictures: response.photos.photo})
      })
      .catch(error => { console.log('It appears there was an error', error) });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch}/>
          <Switch> 
            <Route exact path="/" render={() => <Redirect to ="/hockey"/>} />
            <Route path="/basketball" render={() => <Gallery pictures={this.state.basketballPictures}/>} />
            <Route path="/baseball" render={() => <Gallery pictures={this.state.baseballPictures}/>} />
            <Route path="/football" render={() => <Gallery pictures={this.state.footballPictures}/>} />
            {
              <Route exact path = '/:query' render = { () => (this.state.loading)
               ? <p> Loading...</p> 
               : <Gallery pictures={this.state.pictures} />} 
              />
            }
            {<Route component={Error}/>}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
