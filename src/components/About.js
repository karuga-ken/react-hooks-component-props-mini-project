import React from 'react'

function About({image, text}) {
  return (
    <div>
      <aside>
        <img src={image} alt='blog logo'/>
        <p>{text}</p>
      </aside>
    </div>
  )
}

export default About