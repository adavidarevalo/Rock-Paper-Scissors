import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Main.scss'

import MakerContainer from './MarkerContainer'
import SimpleSwitch from './SimpleSwitch'
import RulesModal from './RulesModal'
import Next from './Next'
import simpleRules from '../assets/images/simpleRules.svg'

const Main = () =>{
    const [Score, setScore] = useState(0)
    const [element, setElement] = useState('')
    const [computer, setComputer] = useState('')
    const Arrays = ['paper', 'scissors', 'rock']  

    const selectElement = e => {
        const number = Math.round(Math.random()*2)
        setComputer(Arrays[number])
        console.log('e ', number)
        setElement(e)
        console.log(element)
    }
    const PlayAgain = () => {
        setComputer('')
        setElement('')
    }
    return(
        <section class="mainContainer">
            <MakerContainer Score={Score}/>
            {element === '' && computer === '' ?(
                <SimpleSwitch selectElement={selectElement}/>
            ):(
                <Next 
                element={element}
                computer={computer}
                setScore={setScore}
                Score={Score}
                PlayAgain={PlayAgain}
                />
            )}
            <RulesModal rules={simpleRules}/>
            <Link to='/complex'>Simple Game</Link>
        </section>
    )
}

export default Main