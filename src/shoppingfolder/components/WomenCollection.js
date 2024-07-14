import React from 'react'

const WomenCollection = (props) => {
    const {title, image1, image2, image3, image4, image5, image6}=props.womenFashion
  return (
    <div className='collectionSection'>
        <h2>{title}</h2>
        <div className='bannerBox'>
        <img src='assets/LadiesBanner.gif' alt=''></img>
        </div>
    
    <div className='menImages'>
      <img src={image1} alt={title}></img>
      <img src={image2} alt={title}></img>
      <img src={image3} alt={title}></img>
      <img src={image4} alt={title}></img>
      <img src={image5} alt={title}></img>
      <img src={image6} alt={title}></img>
    </div>
  </div>
  )
}

export default WomenCollection
