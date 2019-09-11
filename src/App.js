import React, { Component } from 'react';
import './App.css';
import Toolbar from './toolbar/toolbar';
import MainList from './mainList/mainList';


// handleSearchRequest function 
// api request stuff here

// setState(searchResults= 


  // api key: AIzaSyCeVAKwZAZsmxR2e2RupvIS1vMZgdBJRxM

  // https://www.googleapis.com/books/v1/volumes?q=search+terms

    // 

const apiKey = '&key=AIzaSyCeVAKwZAZsmxR2e2RupvIS1vMZgdBJRxM'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: "",
      searchResults: [],  
      resultsItems:{}, 
      bookList: [], 
      filters: "",
      showExpanded: false,
      getUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
      searchUrl: '',
    };
  this.updateSearch = this.updateSearch.bind(this);
  this.buildUrl = this.buildUrl.bind(this);
  this.updateFilters = this.updateFilters.bind(this);

  }


  updateSearch = (event) => {
   this.setState({searchTerms: event.target.value.substr(0,35)});
  };
  
  updateFilters = (filters) => {
    this.setState({filters: filters})
    this.buildUrl();
};



  buildUrl = (event) => {
    console.log ('buildUrl invoked')
    this.setState({searchUrl: this.state.getUrl + this.state.searchTerms + this.state.filters + apiKey})
    this.getSearchResults();
  };
 

  resultsItems(){
    this.state.searchResults.items.map((volume) => {
       this.setState({resultsItems: [volume.volumeInfo.title = {
         title: volume.volumeInfo.title,
         author: volume.volumeInfo.authors,
         description: volume.volumeInfo.description,
         publisher: volume.volumeInfo.publisher,
         publishedDate: volume.volumeInfo.publishedDate,
         imageLinks: volume.volumeInfo.imageLinks,
       }]})
   })};
   
  getSearchResults() {
      fetch(this.state.searchUrl)
        .then(results => {
         if(results.ok) {
           console.log(results)
           return results.json()
          }
          else {
            console.log ("there was an error with the API response")
          }
        })
          .then (resultsJson => {
            this.setState({
              searchResults: resultsJson
            })
            return resultsJson;        
          })
          .then (results => {
            return this.resultsItems();
          })
  }    





      
        



  render() {
    return (
      <div className="App">
        <h1>Book Search</h1>
        <section className="toolBar">
          toolbar
          <Toolbar
          state= {this.state}
          updateFilters= {this.updateFilters.bind(this)}
          updateSearch= {this.updateSearch.bind(this)}
          buildUrl= {this.buildUrl}/>
        </section>

        <section className="mainList">
          mainlist
          <MainList 
          state= {this.state}/>
        </section>

      </div>
    );
  }
}

export default App;
