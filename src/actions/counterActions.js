/**
 * Created by deepaksisodiya on 15/12/15.
 */

import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}