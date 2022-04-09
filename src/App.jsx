import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset.js';

import {AnswersList , Chats} from './components/index'

// import logo from './logo.svg';
// import './App.css';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  displayNextQuestionID = (nextQuestionID) => {

  }











  selectAnswer = (selectedAnswer , nextQuestionID) => {
    switch(true) {
      case (nextQuestionID === 'init'):
        break;
      default: 
      const chat = {
        text: selectedAnswer,
        type: 'answers'
      }
      const chats = this.state.chats;
      chats.push(chat);
      this.setState({
        chats: chats
  
      })
      break;
    }

  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    }
    const chats = this.state.chats;
    chats.push(chat);
    this.setState({

      chats: chats


    })
  }


  componentDidMount() {
    this.initAnswer();
    this.initChats();
  }


  render() {
    return (

      <section className='c-section'>


        <div className='c-box'>
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>


    );
  }
}


// export default App;
