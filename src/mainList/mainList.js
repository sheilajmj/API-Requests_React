import React, { Component } from 'react';
import './mainList.css';
import BookInfo from './bookInfo'


class MainList extends Component {
  render() {
    return (
        <div className= 'mainList'>
            <BookInfo /> Book info
        </div>

    
    );
  }
}

export default MainList;
