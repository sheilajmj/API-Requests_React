import React, { Component } from 'react';
import './bookInfo.css';



// bookList state array populates the bookInfo fields.

// // this.handleButtonClick = this.handleButtonClick.bind(this)
// handleButtonClick = () => {
//   console.log(this.state.count)
// }


class BookInfo extends Component {
    
   

    render() {
        var bookImageUrl = this.props.book.imageLinks.thumbnail
        
    
        return (
            <section className= 'bookInfo' id= 'array spot - author last name'>
                <div>
                    <div><img src={bookImageUrl} alt="Book" /></div>
                    <div>
                        <h2>Title: {this.props.book.title}</h2>
                        <h3>Author: {this.props.book.author}</h3>
                        <h4>Publisher: {this.props.book.publisher} {this.props.book.publishedYear}</h4>
                        <p>Summary: {this.props.book.description}</p>   
                    </div>
                </div>
           
            </section>
    );
  }
}

export default BookInfo;
