import React, { Component } from 'react';
import './mainList.css';
import BookInfo from './bookInfo'


class MainList extends Component {
    static defaultProps = {
        bookList: [],
    }

    


  render() {
      var bookComponents =  this.props.bookList.map((book) => {
        return <BookInfo book = {book} />
     })

    return (
        <div className= 'mainList'>
            {bookComponents}
        </div>

    
    );
  }
}

export default MainList;
