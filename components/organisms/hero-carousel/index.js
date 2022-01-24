import Slider from 'react-slick'
import { Gap, HeroCarouselMobile, ItemCarouselHero, NextArrowHero, PrevArrowHero } from '../..'

const BannerCarousel = ({ nowPlaying }) => {  
  const movieNowPlaying = nowPlaying.results.filter(el => nowPlaying.results.indexOf(el) < 7)
  const settingsLists = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "ease-in",
    prevArrow: <PrevArrowHero />,
    nextArrow: <NextArrowHero />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         autoplay: false,
         dots: false
        }
      },
    ] 
  }
  return (
    <div>
      <Gap className='h-[5rem]' />
      <Slider {...settingsLists}>
        {movieNowPlaying.map(movie => (
           <div key={movie.id} className='bg-black h-0'>
              <ItemCarouselHero  movie={movie} />
           </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerCarousel
