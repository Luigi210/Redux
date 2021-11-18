import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';

function App(props) {


  const addCounter = () => {
    // setCounter(counter + 1);
  }

  const delCounter = () => {
    // setCounter(counter - 1);
  }
  console.log('APP', props);
  return (
    <div className="App">
      <h2>Click to change</h2>
      <p>{props.counter}</p>
      <button onClick={props.onAdd}>+</button>
        <button onClick={props.onSub}>-</button><br></br>
        <button onClick={() => props.onAddNum(2)}>+2</button>
        <button onClick={() => props.onAddNum(3)}>+3</button>
        <button onClick={() => props.onAddNum(4)}>+4</button>
        <button onClick={() => props.onAddNum(5)}>+5</button>
        <button onClick={() => props.onAddNum(6)}>+6</button>
        <button onClick={() => props.onAddNum(7)}>+7</button>

    </div>
  );
}

function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAdd: () => dispatch({ type: 'ADD'}),
        onSub: () => dispatch({ type: 'SUB'}),
        onAddNum: (number) => dispatch({ type: 'ADD_NUM', value: number}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
