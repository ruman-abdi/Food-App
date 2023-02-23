import React from 'react'
import './Modal.css'



const Backdrop=(props)=>{
  return(
      <div className='backdrop'></div>
  )
    }
const ModalOverlay=(props)=>{
    return(
      <div className='modal'>
        <div className='content'>{props.children}</div>
</div>
    )
    };

const Modal = (props) => {

  return (
    <div>
    <Backdrop/>
    <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  )
}

export default Modal
