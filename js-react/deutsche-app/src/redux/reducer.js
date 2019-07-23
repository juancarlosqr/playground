import { ANSWERS, OPTIONS } from './data'
import {
  CHECK_ANSWER,
  START_GAME,
  END_GAME,
} from './actions'

const DEFAULT_STATE = {
  answers: ANSWERS,
  options: OPTIONS,
  gaming: false,
  success: false,
  error: false,
  currentIndex: 0,
  current: null,
  indexList: [],
  responses: [],
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...DEFAULT_STATE,
        current: state.answers[DEFAULT_STATE.currentIndex],
        gaming: true,
      }
    case END_GAME:
      return DEFAULT_STATE
    case CHECK_ANSWER:
      const newState = {
        ...state,
        error: true,
      }
      if (action.payload === newState.current.article) {
        newState.error = false
        if (newState.currentIndex < newState.answers.length - 1) {
          newState.currentIndex++
          newState.current = newState.answers[newState.currentIndex]
        } else {
          newState.success = true
        }
      }
      return newState
    default:
      return state
  }
}
