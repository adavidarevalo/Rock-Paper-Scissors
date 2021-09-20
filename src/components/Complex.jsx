import React, {useState} from 'react'
import MakerContainer from './MarkerContainer'
import ComplexSwitch from './ComplexSwitch'
import Next from './Next'
import RulesModal from './RulesModal'
import rulesBonus from '../assets/images/rulesBonus.svg'
import {Link} from 'react-router-dom'
import "../styles/components/Complex.scss"


const Complex = () => {
    const [Score, setScore] = useState(0)
    const [element, setElement] = useState('')
    const [computer, setComputer] = useState('')
    const Arrays = ['paper', 'scissors', 'rock', 'lizard', 'spock']  

    const selectElement = e => {
        const number = Math.round(Math.random()*4)
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
        <section className="mainContainer">
           <MakerContainer Score={Score}/>
           {element === '' && computer === '' ?(
                <ComplexSwitch selectElement={selectElement}/> 
            ):(
                <Next 
                element={element}
                computer={computer}
                setScore={setScore}
                Score={Score}
                PlayAgain={PlayAgain}
                />
            )}
            <div className="ButtonsNavigation">
                <Link to='/'>Easy</Link>
                <RulesModal rules={rulesBonus}/>
            </div>
        </section>
    )
}

export default Complex