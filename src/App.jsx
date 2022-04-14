import React from 'react';
import './assets/styles/style.css';
// import defaultDataset from './dataset.json';

import {AnswersList , Chats , AlertDialog} from './components/index'
import {db} from './firebase/index';
// import logo from './logo.svg';
// import './App.css';

import database from './firebase';
import { doc, getDoc, setDoc, onSnapshot, collection, query, where } from "firebase/firestore";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: [],
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this)
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

      case (/^https:*/.test(nextQuestionID)):
        const a = document.createElement('a');
        a.href = nextQuestionID;
        a.target = '_blank';
        a.click();
        break;

      case (nextQuestionID === 'contact'):
        this.handleClickOpen();
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

      setTimeout(() => {this.displayNextQuestionID(nextQuestionID)} , 500);
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

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  initDataset = (dataset) => {
    this.setState({dataset: dataset});
  }


  componentDidMount() {
    (async() => {
      const dataset = this.state.dataset;
      const q = query(collection(db, "question"));
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id
          const data = doc.data()
          dataset[id] = data
        });

        console.log(dataset);

      
      // const docRef = query(doc(db, "question", "init"))
      // const docSnap = await getDoc(docRef);
      
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    
        this.initDataset(dataset);
        const initAnswer = '';
        this.selectAnswer(initAnswer , this.state.currentId);
      });

    })();


  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('sca');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (

      <section className='c-section'>

        <div className='c-box'>

          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <AlertDialog open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
        </div>
      </section>


    );
  }
}


// export default App;
