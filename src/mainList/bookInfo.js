import React, { Component } from 'react';
import './bookInfo.css';



// bookList state array populates the bookInfo fields.

// // this.handleButtonClick = this.handleButtonClick.bind(this)
// handleButtonClick = () => {
//   console.log(this.state.count)
// }


class BookInfo extends Component {
    
    render() {
        // const searchResults= this.props.searchResults

        return (
            <section className= 'bookInfo' id= 'array spot - author last name'>
                <div>
                    <div><h2>Title</h2></div>
                    <div><h3>Author: </h3> </div>
                    <div><p>Summary: </p> </div>
                    {/* <button onClick= change the value below to true or false>+</button> */}
                </div>
                <div className= 'expandedBookInfo' value="false">
                    {/* if the value is false - hide this div */}
                    <div>Review:</div>    
                    <div>Contents:</div>
                    <div>Rating:</div>
                    <div>Publisher: </div>
                    <div>ISBN:</div>
                </div>
            </section>
    );
  }
}

export default BookInfo;
