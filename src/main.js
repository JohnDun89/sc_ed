import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends Component {
  constructor(props){
    super(props);

    this.state= {tweets: []}
  }

componentDidMount(){
  fetch("twitterAPIWIllGoHere")
  .then(results => {
    return results.json();
  }).then(data =>{
    let tweets = data.results.map((tweet) => {
      return(
        <div key={tweet.results}>
          <p></p>
        </div>
      )
    })
    this.setState({tweets: tweets})
    console.log("state", this.state.tweets)
  })
}


  render() {
    return (
      <div className="App">
        
          <p>
              Hello world
          </p>
        </div>

    );
  }
}

export default Main;
