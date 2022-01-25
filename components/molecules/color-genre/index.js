import { useRouter } from 'next/router'
import { useState } from 'react'
import Slider from 'react-slick'
import { NextArrowHero, PrevArrowHero } from '../..'
import {GiBoxingGlove, GiWesternHat} from 'react-icons/gi'
import {FaBook} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'


const ColorGenre = () => {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const settingsLists = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    cssEase: "ease-in",
    centerMode: true,
    prevArrow: <PrevArrowHero />,
    nextArrow: <NextArrowHero />,
  }

  return (
    <section className='lg:hidden'>
    <Slider {...settingsLists}>

      <button onClick={() => router.push('/genre/28')} className={`rounded-full text-sm py-5 px-5 -ml-28 text-white bg-black text-white border border-gray-500`}><GiBoxingGlove size={20} className='inline-block mr-2' />Action</button>

      <button onClick={() => router.push('/genre/10752')} className='border border-gray-500 text-sm py-5 rounded-full px-0  -ml-24 bg-black text-white '><FaBook size={20} className=' inline-block mr-2'/>War</button>

      <button onClick={() => router.push('/genre/27')} className='text-sm text-white py-5 rounded-full px-0   -ml-20 bg-black border border-gray-500'><BsPeopleFill size={20} className='inline-block mr-2' />Horror</button>

      <button onClick={() => router.push('/genre/37')} className='text-sm text-white py-5 rounded-full px-0 -ml-16 bg-black border border-gray-500'><GiWesternHat size={20} className='inline-block mr-2' /> Western</button>
      <button></button>

   </Slider>
   </section>
  )
}

export default ColorGenre;
