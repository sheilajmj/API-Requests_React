import React, { Component } from 'react';
import './toolbar.css';
import Search from './search'
import Filter from './filter'


class Toolbar extends Component {
  render() {
    return (
        <div className= 'Filter'>
            <Search 
            state = {this.props.state}
            updateSearch = {this.props.updateSearch}
            buildUrl = {this.props.buildUrl}/>
            <Filter 
            updateFilters = {this.props.updateFilters} />
        </div>    
    );
  }
}

export default Toolbar;
