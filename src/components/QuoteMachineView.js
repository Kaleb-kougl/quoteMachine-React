import React, { Component } from 'react';
import { Card } from './';

// This is the highest level component

class QuoteMachineView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visibleQuoteId: 0,
        visibleColorRed: 200, 
        visibleColorGreen: 14, 
        visibleColorBlue: 14,
        quoteLink: "twitter.com/intent/tweet?hashtags=quotes,react&related=freecodecamp&text='I can't believe this works.' Kaleb Kougl",
        visibleQuote: '',
        visibleAuthor: '',
      };      
    }

    // if there is a change in state this method is called
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.visibleQuoteId !== this.state.visibleQuoteId) {
        this.setState({ 
          visibleQuote: quotes[this.state.visibleQuoteId].quote, 
          visibleAuthor: quotes[this.state.visibleQuoteId].author, 
          quoteLink: `twitter.com/intent/tweet?hashtags=quotes,react&related=freecodecamp&text=${quotes[this.state.visibleQuoteId].quote} ${quotes[this.state.visibleQuoteId].author}`
         });    
      }
    }
    
    render() {
      let red = this.state.visibleColorRed;
      let green = this.state.visibleColorGreen;
      let blue = this.state.visibleColorBlue;
      return (
        <div className="QuoteMachine" 
          id='quote-box'
          style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`, 
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Card 
          visibleQuoteId={this.state.visibleQuoteId}
          visibleColorRed={this.state.visibleColorRed}
          visibleColorBlue={this.state.visibleColorBlue}
          visibleColorGreen={this.state.visibleColorGreen}
          changeVisibleQuote={ 
            (visibleQuoteId, visibleColorRed, visibleColorGreen, visibleColorBlue) => {
              this.setState({visibleQuoteId, visibleColorRed, visibleColorGreen, visibleColorBlue})
            }
          }
          twitterLink={this.state.quoteLink}
          />
        </div>
      );
    }
}

const quotes = 
[
  {
      "id": 0,
      "author": "Dr.Suess",
      "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
  },
  {
      "id": 1,
      "author": "John Lennon",
      "quote": "Life is what happens when you're busy making other plans."
  },
  {
      "id": 2,
      "author": "Helen Keller",
      "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."
  },
  {
      "id": 3,
      "author": "Mark Twain",
      "quote": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do."
  },
  {
      "id": 4,
      "author": "John F. Kennedy",
      "quote": "Those who dare to fail miserably can achieve greatly."
  },
  {
      "id": 5,
      "author": "Thomas J. Watson",
      "quote": "Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success."
  }
];

export default QuoteMachineView;