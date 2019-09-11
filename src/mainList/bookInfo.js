import React, { Component } from 'react';
import './bookInfo.css';



// bookList state array populates the bookInfo fields.

// // this.handleButtonClick = this.handleButtonClick.bind(this)
// handleButtonClick = () => {
//   console.log(this.state.count)
// }


class BookInfo extends Component {

resultsItems(){

    this.props.state.searchResults.items.map((volume) => {
      volume = {
            title: volume.volumeInfo.title,
            author: volume.volumeInfo.authors,
            description: volume.volumeInfo.description,
            publisher: volume.volumeInfo.publisher,
            publishedDate: volume.volumeInfo.publishedDate,
            imageLinks: volume.volumeInfo.imageLinks,
            }})
    return volume
        };



    render() {
        // const searchResults= this.props.searchResults

        return (
            <section className= 'bookInfo' id= 'array spot - author last name'>
                <div>
                    <div><h2>{this.volume.title}</h2></div>
                    <div><h3>{this.volume.author}</h3> </div>
                    <div><p>{this.volume.description}</p> </div>
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
