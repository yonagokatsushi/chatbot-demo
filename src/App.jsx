import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset.js';

import {AnswersList} from './components/index'

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

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers
    })
  }

  componentDidMount() {

    this.initAnswer();
  }





  render() {
    return (
      <section className='c-section'>
        <div className='c-box'>
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}


// export default App;
