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
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  displayNextQuestionID = (nextQuestionID) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionID].question, 
      type: 'question'
    });
    this.setState({
      answers: this.state.dataset[nextQuestionID].answers, 
      chats: chats, 

      currentId: nextQuestionID
    })
  }









  selectAnswer = (selectedAnswer , nextQuestionID) => {


    switch(true) {
      case (nextQuestionID === 'init'):
        this.displayNextQuestionID(nextQuestionID);
        break;

      default: 
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answers'
        });
        this.setState({
          chats: chats
        })

        this.displayNextQuestionID(nextQuestionID);
        break;
    }

  }

  // initAnswer = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const initAnswers = initDataset.answers;
  //   this.setState({
  //     answers: initAnswers
  //   })
  // }

  // initChats = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const chat = {
  //     text: initDataset.question,
  //     type: 'question'
  //   }
  //   const chats = this.state.chats;
  //   chats.push(chat);
  //   this.setState({
  //     chats: chats

  //   })
  // }



  componentDidMount() {
    const initAnswer = '';
    this.selectAnswer(initAnswer , 'init');
  }


  render() {
    return (

      <section className='c-section'>


        <div className='c-box'>
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>


    );
  }
}


// export default App;
