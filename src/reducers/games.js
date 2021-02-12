import { createSlice } from '@reduxjs/toolkit'

export const games = createSlice({
    name: 'games',
    initialState: {
        username: null,
        game: { 
            directions: 'THIS IS WHERE THE GAME STARTS', 
            question: '', 
            hint: '', 
            answer: '', }
    },

    reducers: {
        generateGame: (state, action) => {
            state.game = action.payload
        },
        setUsername : (state, action) => {
            state.username = action.payload
        },
    }
})

// DUMMY DATA - SWAP FOR YOUR OWN DATABAS WHEN IT STARTS WORKING. 
