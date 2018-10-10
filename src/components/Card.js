import React, { Component } from 'react';
import { OutputBox, Navbar } from './';

class Card extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <div style={{height: '30em', width: '50em', backgroundColor: '#DCDCDC', textAlign: 'center', alignSelf: 'center', padding: '10px', boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'}}>
            <OutputBox 
              visibleQuoteId={this.props.visibleQuoteId}
              visibleColorRed={this.props.visibleColorRed}
              visibleColorGreen={this.props.visibleColorGreen}
              visibleColorBlue={this.props.visibleColorBlue}
            />
            <Navbar
              changeVisibleQuote={this.props.changeVisibleQuote} 
              visibleColorRed={this.props.visibleColorRed}
              visibleColorGreen={this.props.visibleColorGreen}
              visibleColorBlue={this.props.visibleColorBlue}
              twitterLink={this.props.twitterLink}
            />
        </div>
      );
    }
}

export default Card;