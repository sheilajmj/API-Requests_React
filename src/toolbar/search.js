import React, { Component } from 'react';
import './search.css';


class Search extends Component {
    render() {
        return (
            <div className= 'search'>
                <label>Search:</label>
                <input 
                    type= "text"
                    name="searchTerms" 
                    placeholder="Search Terms" 
                    defaultValue={this.props.state.searchTerms}
                    onChange = {this.props.updateSearch.bind(this)}>           
                </input>         
            </div>
    );
  }
}

export default Search;
