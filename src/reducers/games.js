import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    game: {
        directions: 'THIS IS WHERE THE GAME STARTS', 
        question: '', 
        hint: '', 
        answer: '', 
    }
}

export const games = createSlice({
    name: 'games',
    initialState,

    reducers: {
        generateGame: (state, action) => {
            const currentGameState = action.payload
            state.game = currentGameState
        },
        setUsername : (state, action) => {
            state.username = action.payload
        },
    }
})

// DUMMY DATA - SWAP FOR YOUR OWN DATABAS WHEN IT STARTS WORKING. 
