import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
            <h2>Lifestyle</h2>
        </div>
        <div className='middle'>
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
            </ul>
        </div>
        <div className='srch'>
            <input type='search' placeholder='Search..'></input>
        </div>
        <div className='right'>
            <div className='signin'>
                SignIN/SignUP
            </div>
            <div className='cart'>Cart</div>
        </div>
    </div>
  )
}

export default Header
