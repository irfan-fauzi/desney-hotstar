import CaptionPart from "./caption-part"
import ImagePart from "./image-part"


const ItemCarouselHero = ({movie}) => {
  return (
    <div className='flex flex-row-reverse relative lg:after:content-[""] lg:after:bg-gradient lg:after:absolute lg:after:top-0 lg:after:left-0 lg:after:h-full lg:after:w-full ml-4  rounded-xl lg:after:rounded-l-xl '>
      <ImagePart movie={movie} />
      <CaptionPart movie={movie} />
    </div>
  )
}

export default ItemCarouselHero
