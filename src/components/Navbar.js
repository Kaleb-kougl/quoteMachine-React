import React, {Component} from 'react';
import { ShareButton, NewQuoteButton } from './';

class Navbar extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'space-evenly', height: '50%', alignItems: 'flex-end'}}>
          <ShareButton
            visibleColorRed={this.props.visibleColorRed}
            visibleColorGreen={this.props.visibleColorGreen}
            visibleColorBlue={this.props.visibleColorBlue}
            twitterLink={this.props.twitterLink} 
          />
          <NewQuoteButton
            changeVisibleQuote={this.props.changeVisibleQuote}
            visibleColorRed={this.props.visibleColorRed}
            visibleColorGreen={this.props.visibleColorGreen}
            visibleColorBlue={this.props.visibleColorBlue} 
          />
        </div>
      );
    }
}

export default Navbar;