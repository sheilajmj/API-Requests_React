import React, { Component } from 'react';
import './filter.css';


// this.handleButtonClick = this.handleButtonClick.bind(this)
// handleButtonClick = () => {
//   console.log(this.state.count)
// }

class Filter extends Component {

   grabPrintTypeFilters(value){
    let filter = ""   
    if (value === "printType=all"){
        filter = '&printType=all'
       }
    else if (value === "printType=books"){
        filter = '&printType=books'
    }
    else if (value === "printType=magazines"){
        filter = '&printType=magazines'
    }
    else {
        filter = 'something weird happened.'
    }
    console.log(filter);

    this.props.updateFilters(filter);
   }



    render() {
        return (
            <div className= 'Filter'>
                <label>Print Type</label>
                <select 
                    name="printTypes"
                    onChange={e => this.grabPrintTypeFilters(e.target.value)}>
                    <option value= "printType=all">All</option>
                    <option value= "printType=books">Books</option>
                    <option value= "printType=magazines">Magazines</option>
                </select>  
            </div>

        
        );
  }
}

export default Filter;
