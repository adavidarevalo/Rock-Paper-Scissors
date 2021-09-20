import React from 'react'
import triangle from '../assets/images/triangle.svg'
import paper from '../assets/images/paper.svg'
import scissors from '../assets/images/scissors.svg'
import rock from '../assets/images/rock.svg'
import '../styles/components/SimpleSwitch.scss'
import Button from './Button'

const SimpleSwitch = ({selectElement}) =>{
    return(
        <section class='containerPlay'>
            <img src={triangle} alt='figure'/>
            <Button picture={paper} selectElement={selectElement} name='paper'/>
            <Button picture={scissors} selectElement={selectElement} name='scissors'/>
            <Button picture={rock} selectElement={selectElement} name='rock'/>
        </section>
    )
}

export default SimpleSwitch