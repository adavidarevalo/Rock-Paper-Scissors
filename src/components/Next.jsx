import React, {useState, useEffect} from 'react'
import {selecImg, ScoreLogic} from './ResultLogic'
import Button from "./Button"
import "../styles/components/Next.scss"

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
        <section className="NextContainer">
            <div className="Conatiner">
                <Button picture={yourElement} name={element}/>
                <h2>you picked</h2>
            </div>
            <div className="Conatiner">
                <Button picture={computerResult} name={computer}/>
                <h2>the house picked</h2>
            </div>
            <p>{WinLose}</p>
            <button
            className="PlayAgain"
            onClick={PlayAgain}
            >Play Again</button>
        </section>
    )
}

export default Next