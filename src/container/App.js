import React, {Component} from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';

class App extends Component {
  // constructor(){
  //   super();
  //   this.onSearchSubmit = this.onSearchSubmit.bind(this);
  // }

  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    //console.log(term);
    const response = await Unsplash.get('/search/photos', {
      params: { query: term},
      
    });
    //.then((response) => console.log(response.data.results))
    //console.log(response.data.results);
    this.setState({images: response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit = {this.onSearchSubmit}/>  
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;
