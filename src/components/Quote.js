import React, { Component } from 'react';

class Quote extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let quoteId = this.props.visibleQuoteId;
      let red = this.props.visibleColorRed;
      let green = this.props.visibleColorGreen;
      let blue = this.props.visibleColorBlue;
      return (
        <div style={{ flex: 5, color: `rgb(${red}, ${green}, ${blue})`, fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: 30,}} id="text">
          
          {quotes.map(function(quote){
            if (quote.id === quoteId)
              return <div>{quote.quote}</div>;
          })}
  
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

export default Quote;