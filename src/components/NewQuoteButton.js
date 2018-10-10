import React, { Component } from 'react';

class NewQuoteButton extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      let red = this.props.visibleColorRed;
      let green = this.props.visibleColorGreen;
      let blue = this.props.visibleColorBlue;

      return (
        <button
        id='new-quote' 
          onClick={() => this.props.changeVisibleQuote( 
            Math.floor(Math.random() * 6), 
            Math.floor(Math.random() * 256), 
            Math.floor(Math.random() * 256), 
            Math.floor(Math.random() * 256) )} 
          style={{
            color: 'White',
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            height: 40,
            width: 150,
            fontSize: 20,
          }}
        >
          New Quote!
        </button>
      );
    }
}

const style = {
  
}

export default NewQuoteButton;
