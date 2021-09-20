import React from 'react'
import pentagon from '../assets/images/pentagon.svg'
import Button from './Button'
import rock from '../assets/images/rock.svg'
import paper from '../assets/images/paper.svg'
import scissors from '../assets/images/scissors.svg'
import lizard from '../assets/images/lizard.svg'
import spock from '../assets/images/spock.svg'


const ComplexSwitch = ({selectElement}) =>{
    return(
        <section>
            <img src={pentagon} alt='pentagon'/>
            <Button picture={scissors} selectElement={selectElement} name='scissors'/>
            <Button picture={paper} selectElement={selectElement} name='paper'/>
            <Button picture={rock} selectElement={selectElement} name='rock'/>
            <Button picture={lizard} selectElement={selectElement} name='lizard'/>
            <Button picture={spock} selectElement={selectElement} name='spock'/>
        </section>
    )
}

export default ComplexSwitch