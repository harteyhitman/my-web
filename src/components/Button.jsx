import React from 'react'
import MyResume from '../asset/my-resume.pdf'

const Button = (props) => {
  
  return (
    <div className='div-button'>
        <button className='nav-contact'><a href={MyResume} download={MyResume}>{props.first}</a></button>
        <button className='nav-contact'><a href="#footer">{props.second}</a></button>
    </div>
  )
}

export default Button