import { Gap } from "../../.."

const CaptionPart = ({movie}) => {
  return (
    <div className='lg:w-5/12 hidden text-white relative z-10 lg:flex items-center '>
    <div className='px-10'>
      <h1 className='text-4xl text-left font-bold'>{movie.original_title}</h1>
      <Gap className='h-3' />
      <p className='text-left text-gray-400 font-semibold'>Release date : {movie.release_date}</p>
      <Gap className='h-3' />
      <p className='text-left text-gray-400 text-md'>{movie.overview}</p>
    </div>  
 </div>
  )
}

export default CaptionPart
