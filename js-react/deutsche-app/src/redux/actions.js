/* actions types */
export const CHECK_ANSWER = 'CHECK_ANSWER'
export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'

/* actions */
export const checkAnswer = payload => ({
  type: CHECK_ANSWER,
  payload,
})

export const startGame = (payload = {}) => ({
  type: START_GAME,
  payload,
})

export const endGame = (payload = {}) => ({
  type: END_GAME,
  payload,
})
