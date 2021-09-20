import React, {useState, useEffect} from 'react'
import {selecImg, ScoreLogic} from './ResultLogic'

const Next = ({element, computer, Score, setScore, PlayAgain}) =>{
    const [yourElement, setElement] = useState()
    const [computerResult, setComputerResult] = useState()
    const [WinLose, setWinLose] = useState('')


    useEffect(() => {
        selecImg(element, setElement)
        selecImg(computer, setComputerResult)
        ScoreLogic(element, computer, Score, setScore, setWinLose)
    }, [])

    return(
        <section>
            <div>
                <div>
                    <img src={yourElement} alt='you picked'/>
                </div>
                <h2>you picked</h2>
            </div>
            <div>
                <div>
                    <img src={computerResult} alt='you picked'/>
                </div>
                <h2>the house picked</h2>
            </div>
            <p>{WinLose}</p>
            <button
            onClick={PlayAgain}
            >Play Again</button>
        </section>
    )
}

export default Next