import React, { Component } from 'react';
import { Quote, Author } from './';

class OutputBox extends Component {
    constructor(props) {
      super(props);
    }
  
    render () {
      return (
        <div style={{display: 'flex', flex: 1, flexDirection: "column", height: '50%',}}>
          <Quote
            visibleQuoteId={this.props.visibleQuoteId}            
            visibleColorRed={this.props.visibleColorRed}
            visibleColorGreen={this.props.visibleColorGreen}
            visibleColorBlue={this.props.visibleColorBlue}
           />
          <Author
            visibleQuoteId={this.props.visibleQuoteId}            
            visibleColorRed={this.props.visibleColorRed}
            visibleColorGreen={this.props.visibleColorGreen}
            visibleColorBlue={this.props.visibleColorBlue} 
           />
        </div>
      ); 
    }
}

export default OutputBox;