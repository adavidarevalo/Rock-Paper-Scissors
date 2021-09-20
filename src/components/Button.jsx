import React from 'react'
import '../styles/components/Button.scss'

const Button = ({picture, selectElement, name}) => {
    const Click = () => {
      if(selectElement){
        selectElement(name)
      } else{
        return null
      }
    }
    return(
        <button
        className={selectElement ? 'buttonContainer' : `buttonContainer ${name}`}
        onClick={()=>Click()}
        >
          <img 
          src={picture} 
          alt="Sing" 
          className="Image"
          />
        </button>
    )
}

export default Button