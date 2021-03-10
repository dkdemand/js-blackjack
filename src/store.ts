import { configureStore } from '@reduxjs/toolkit'
import game from './game-engine/gameEngineSlice'
// ...

const store = configureStore({
  reducer: {
    game
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch