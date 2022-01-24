import { useRouter } from 'next/router'
import Slider from 'react-slick'
import { NextArrowHero, PrevArrowHero } from '../..'
import {GiBoxingGlove, GiWesternHat} from 'react-icons/gi'
import {FaBook} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'


const ColorGenre = () => {
  const router = useRouter()
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
      <button onClick={() => router.push('/genre/28')} className='text-sm py-5 rounded-lg px-5 -ml-28 text-white bg-gradient-genre-red '><GiBoxingGlove size={20} className='inline-block mr-2' />Action</button>
      <button onClick={() => router.push('/genre/99')} className=' text-sm py-5 rounded-lg px-0  -ml-24 bg-gradient-genre-blue text-white '><FaBook size={20} className=' inline-block mr-2'/>Documenter</button>
      <button onClick={() => router.push('/genre/27')} className='text-sm text-white py-5 rounded-lg px-0   -ml-20 bg-yellow-500'><BsPeopleFill size={20} className='inline-block mr-2' />Horror</button>
      <button onClick={() => router.push('/genre/37')} className='text-sm text-white py-5 rounded-lg px-0 -ml-16 bg-green-500'><GiWesternHat size={20} className='inline-block mr-2' /> Western</button>
      <button></button>
   </Slider>
   </section>
  )
}

export default ColorGenre;
