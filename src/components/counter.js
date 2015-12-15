/**
 * Created by deepaksisodiya on 15/12/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var counter = require('./../reducer/counter');

var counterActions = require('./../actions/counterActions');

var createStore = require('redux').createStore;

var store = createStore(counter);

var Counter = React.createClass({

  render: function() {
    console.log(this.props.increment);
    var { value, increment, decrement } = this.props;
    console.log(increment);
    return (
      <div>
        <p>{ value }</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }

});

function render() {
  ReactDOM.render(
    <Counter value={ store.getState() }
             increment={ () => {
             store.dispatch(counterActions.increment());
             } }
             decrement={ () => {
             store.dispatch(counterActions.decrement());
             }}
    />,
    document.getElementById('mount-point')
  );
}

render();

store.subscribe(render);
