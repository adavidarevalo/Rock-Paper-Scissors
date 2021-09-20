import React from 'react'
import '../styles/components/Button.scss'

const Button = ({picture, selectElement, name}) => {
    return(
        <button
        class='buttonContainer'
        onClick={()=>{selectElement(name)}}
        >
          <img 
          src={picture} 
          alt="Sing" 
          class="Image"
          />
        </button>
    )
}

export default Button