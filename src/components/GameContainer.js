import React from 'react'
import { useSelector } from 'react-redux'

export const GameContainer = () => {
    const game = useSelector(store => store.games.game)

    return (
        <div className="game-wrapper"> 
            <div className="game-info">{game.directions}</div>
            <div className="game-info">{game.question}</div>
            <div className="game-info">{game.hint}</div>
            
            <div className="answer-box">
            <input 
              type="text" 
              placeholder="Answer?"
               value={game.answer} 
            //   onChange={event => setAnswer(event.target.value)}
            />

             </div>
        </div>
        

    )
}