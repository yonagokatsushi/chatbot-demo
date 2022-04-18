import React, {useState, useCallback, useEffect} from 'react';
import './assets/styles/style.css';
// import defaultDataset from './dataset.json';

import {AnswersList , Chats , FormDialog} from './components/index'
import {db} from './firebase/index';
// import logo from './logo.svg';
// import './App.css';

// import database from './firebase';
import { doc, getDoc, setDoc, onSnapshot, collection, query, where } from "firebase/firestore";

const App = () => {

  const [answers, setAnswers] = useState([]);
  const [chats , setChats] = useState([]);
  const [currentId , setCurrentId] = useState("init");
  const [dataset , setDataset] = useState({});
  const [open , setOpen] = useState(false);
  // constructor(props) {
    // super(props);
    // this.state = {
    //   answers: [],
    //   chats: [],
    //   currentId: "init",
    //   dataset: {},
    //   open: false
    // }
    // this.selectAnswer = this.selectAnswer.bind(this);
    // this.handleClickOpen = this.handleClickOpen.bind(this);
    // this.handleClose = this.handleClose.bind(this)
  // }













  const displayNextQuestion = (nextQuestionID , nextDataset) => {
    addChats({


      text: nextDataset.question, 
      type: 'question'
    });
    setAnswers(nextDataset.answers) 

    setCurrentId(nextQuestionID)
    if (document.getElementById("root").getElementsByClassName("c-grid__answer")[0].classList.contains("js-wait")) { grid__answer.classList.remove("js-wait"); }
  }
  const grid__answer = document.getElementById("root").getElementsByClassName("c-grid__answer")[0];
  const selectAnswer = (selectedAnswer , nextQuestionID) => {
    const hasClass = grid__answer.classList.contains("js-wait");
    if (!hasClass) {
      grid__answer.classList.add("js-wait");
      switch(true) {
        // case (nextQuestionID === 'init'):
        //   displayNextQuestion(nextQuestionID);
        //   break;

        case (/^https:*/.test(nextQuestionID)):
          const a = document.createElement('a');
          a.href = nextQuestionID;
          a.target = '_blank';
          a.click(); grid__answer.classList.remove("js-wait");
          break;

        case (nextQuestionID === 'contact'):
          handleClickOpen(); grid__answer.classList.remove("js-wait");
          break;
    
        default: 
        // const chats = state.chats;
        addChats({
          text: selectedAnswer,
          type: 'answers'
        });

        setTimeout(() => {displayNextQuestion(nextQuestionID , dataset[nextQuestionID])} , 500);
        break;
      }

    }
  }



  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats , chat]
    })
  } , [setChats]);

  // initAnswer = () => {
  //   const initDataset = state.dataset[this.state.currentId];
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

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  } , [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  } , [setOpen]);

  // const initDataset = (dataset) => {
  //   this.setState({dataset: dataset});
  // }

  useEffect(() => {

    (async() => {
      const initDataset = [];
      const q = query(collection(db, "question"));

      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        });

        // console.log(initDataset);

      
      // const docRef = query(doc(db, "question", "init"))
      // const docSnap = await getDoc(docRef);
      
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    
        setDataset(initDataset);
        displayNextQuestion(currentId , initDataset[currentId]);
      });

    })();


  } , [])

  useEffect(() => {
    const scrollArea = document.getElementById('sca');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })

  // render() {
    return (

      <section className='c-section'>

        <div className='c-box'>

          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <FormDialog open={open} handleOpen={handleClickOpen} handleClose={handleClose} />
        </div>
      </section>



    );
  // }
}


export default App;
