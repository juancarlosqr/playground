/* actions types */
import { INCREMENT, DECREMENT, RESET } from './reducer'

/* actions */
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
