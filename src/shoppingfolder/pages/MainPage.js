import React,{useState} from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import {Gents} from '../data'
import {Ladies} from '../data'
import WomenCollection from '../components/WomenCollection';
const MainPage = () => {
     const [gentsFashion]=useState(Gents)
     const [womenFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion} />
      <WomenCollection womenFashion={womenFashion}/>
      <Footer/>
    </div>
  )
}

export default MainPage;

