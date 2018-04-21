import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='home-page'>
          <img className='home-img'src={"/images/livingRoom.jpg"}></img>
        </div>
        <div>
          <div className='col-md-6'>
            <a href="#/PrintsList">
              <img className='link-img'src={"/images/shopPrints.png"}></img>
            </a>
          </div>
          <div className='col-md-6'>
            <a href="#/CardsList">
              <img className='link-img'src={"/images/shopCards.png"}></img>
            </a>
          </div>
        </div>
    </div>
  )
}


export default Home
