import React, { Component } from 'react'

class ShareButton extends Component {
    render() {

      let red = this.props.visibleColorRed;
      let green = this.props.visibleColorGreen;
      let blue = this.props.visibleColorBlue;

      return (
        <a target='_blank' href={this.props.twitterLink} title="Tweet this quote!" id='tweet-quote'>
          <button onClick={() => console.log('Pressed share Button.')} style={{
            color: 'White',          
            height: 40,
            width: 100,
            fontSize: 20,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
          }}>
          &#128038;
          </button>
        </a>        
      );
    }
  }

export default ShareButton;