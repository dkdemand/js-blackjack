import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface GameState {
  gameStarted: boolean,
  playerTil: number,
  dealerTil: number,
  tableChips: number
}

type Action = {
  payload: any
}

// Define the initial state using that type
const initialState: GameState = {
  gameStarted: false,
  playerTil: 1000,
  dealerTil: 5000,
  tableChips: 0
}

export const gameSlice = createSlice({
  name: 'game',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGameStarted: (state: GameState, action: Action) => {
      state.gameStarted = action.payload
    },
    subPlayerTil: (state: GameState, action: Action) => {
      state.playerTil -= action.payload
    },
    addPlayerTil: (state: GameState, action: Action) => {
      state.playerTil += action.payload
    },
    subDealerTil: (state: GameState, action: Action) => {
      state.dealerTil -= action.payload
    },
    addDealerTil: (state: GameState, action: Action) => {
      state.dealerTil += action.payload
    },
    addTableChips: (state: GameState, action: Action) => {
      state.tableChips = action.payload
    },
    resetTableChips: (state: GameState, action: Action) => {
      state.tableChips = 0
    }
  }
})

export const { setGameStarted, subDealerTil, addDealerTil, addPlayerTil, subPlayerTil, addTableChips } = gameSlice.actions

export const playerBet = (betAmount: number) => (dispatch: Function) => {
  subPlayerTil(betAmount)
  addTableChips(betAmount)
}

// Other code such as selectors can use the imported `RootState` type
export const selectGameStarted = (state: RootState) => state.game.gameStarted

export default gameSlice.reducer