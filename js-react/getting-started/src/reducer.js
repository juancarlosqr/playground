export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

const DEFAULT_STATE = 0

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return DEFAULT_STATE
    default:
      return state
  }
}
