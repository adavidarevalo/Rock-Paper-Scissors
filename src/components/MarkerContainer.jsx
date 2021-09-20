import React from 'react'
import '../styles/components/MarkerContainer.scss'


const MarkerContainer = ({Score}) =>{
    return(
        <header>
            <div className='titles'>
              <p>Rock Paper Scissors</p>
            </div>
            <div className='score'>
                <h2>Score</h2>
                <p>{Score}</p>
            </div>
        </header>
    )
}

export default MarkerContainer