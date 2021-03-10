import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface GameState {
  gameStarted: boolean
}

// Define the initial state using that type
const initialState: GameState = {
  gameStarted: false
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGameStarted: (state, action) => {
      state.gameStarted = action.payload
    }
  }
})

export const { setGameStarted } = gameSlice.actions

export const getTodo = () => dispatch => {
  // fetch url

  dispatch()
}

// Other code such as selectors can use the imported `RootState` type
export const selectGameStarted = (state: RootState) => state.game.gameStarted

export default gameSlice.reducer