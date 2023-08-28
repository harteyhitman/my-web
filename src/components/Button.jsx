import React from 'react'

const Button = (props) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('file:///C:/Users/Hp/Desktop/Azeez%20Oyegoke%20Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'file:///C:/Users/Hp/Desktop/Azeez%20Oyegoke%20Resume.pdf';
            alink.click();
        })
    })
  }
  return (
    <div className='div-button'>
        <button>{props.first}</button>
        <button onClick={onButtonClick} className='nav-contact'><a href="#footer">{props.second}</a></button>
    </div>
  )
}

export default Button