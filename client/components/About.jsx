import React from 'react'

const About = () => {
  return (
    <div className = 'wallpaper-no-border'>
      <div className='container'>

        <div className='about-page'>
          <p className='about-title'>About Us</p>
          <img className='sam-img'src={"/images/sam.png"}></img>
        </div>
        <div className='about-text'>
          <p> Luna Designs is based in Wellington, New Zealand. Sam Paulsen is the designer behind Luna Designs.
            She has a bachelor of innovation Design. She began creating illustrations for the wall to make lovely gifts for firends.
            Recieved with great joy it was then decided to share the illustrations with the world to create joy for others.
          </p>
          <p>We aim to offer you locally designed and made products for the home that make great gifts.</p>
          <p>We are also open to custom work.
          </p>
          </div>
      </div>
    </div>
  )
}

export default About
