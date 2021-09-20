import React, {useState} from 'react'
import Modal from 'react-modal';
import iconClose from "../assets/images/iconClose.svg"
import "../styles/components/RulesModal.scss"

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)'
  },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "80%",
      margin: "0 auto"
    },
  };

const RulesModal = ({rules}) =>{
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
 
    function closeModal() {
      setIsOpen(false);
    }
    return(
        <div>
      <button 
      onClick={openModal}
      className="OpenModalButton"
      >Rules</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="ModalContainer">
          <img 
          src={rules} 
          className="RulesImage"
          alt='rules'/>
          <img 
          src={iconClose} 
          alt="closeButton"
          className="closeButton"
          onClick={closeModal}
          />
        </div>
      </Modal>
    </div>
    )
}

export default RulesModal