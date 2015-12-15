/**
 * Created by deepaksisodiya on 15/12/15.
 */


function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  } else if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

module.exports = counter;