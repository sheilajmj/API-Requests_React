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




class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: "",
      searchResult: [],  
      bookList: [], 
      filters: "",
      showExpanded: false,
      getUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
      searchUrl: ''
    };
  this.updateSearch = this.updateSearch.bind(this);
  this.buildUrl = this.buildUrl.bind(this);
  this.updateFilters = this.updateFilters.bind(this);

  }

 updateSearch = (event) => {
   
   console.log("updateSearch invoked")
   this.setState({searchTerms: event.target.value.substr(0,35)});

  };


  buildUrl = (event) => {
    console.log ('buildUrl invoked')
    console.log (this.state.filters)
    if (this.state.searchTerms === "" && this.state.filters === ""){
      this.setState({searchResults: 'Please input a search term or filter.'})
      console.log ('this is the first if:' + this.state.searchUrl)
    }
    else if (this.state.searchTerms === "" && this.state.filters.valueOf() > 0){
      this.setState({searchUrl: this.state.getUrl+this.state.filters+'&key=AIzaSyCeVAKwZAZsmxR2e2RupvIS1vMZgdBJRxM'})
      console.log ('this is the first else if:' + this.state.searchUrl)
    }
    else if (this.state.searchTerms.valueOf() > 0 && this.state.filters.valueOf() > 0){
      this.setState({searchUrl: this.state.getUrl + this.state.searchTerms + '&' + this.state.filters + '&key=AIzaSyCeVAKwZAZsmxR2e2RupvIS1vMZgdBJRxM'})
      console.log ('this is the second else if:' + this.state.searchUrl)
    }
    else if (this.state.searchTerms.valueOf() > 0 && this.state.filters === ""){
      this.setState({searchUrl: this.state.getUrl + this.state.searchTerms + '&key=AIzaSyCeVAKwZAZsmxR2e2RupvIS1vMZgdBJRxM'})
      console.log ('this is the third else if:' + this.state.searchUrl)
    }
    else {
      this.setState({searchResults: "Something else happened and I don't know what"})
    }  
    console.log (this)
    console.log  ('here is what buildUrl made - it is the state.searchUrl:' +  this.state.searchUrl);
  };

  
  
  updateFilters(filters){
    console.log('updateFilters invoked')
    this.setState({filters: filters});
    console.log(this.state)
    console.log ('these are the filters' + this.state.filters)      
    this.buildUrl();

  };  

  componentDidMount() {
      fetch(this.state.getUrl)
        .then(response => {
          //check if response is ok
          console.log('About to check for errors');
          if(!response.ok) {
            console.log('An error did occur, lets throw an error.');
            throw new Error('Something went wrong'); //throw an error
          }
          return response; //ok, so just continue
        })
        .then(response => response.json())
        .then(data => {
          const countries = Object.keys(data)
                .map(key => data[key].item[0]);
          this.setState({
            countries
          });
        })
        .catch(err => {
          //this catch handles the error condition
          console.log('Handling the error here.', err);
        });
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
