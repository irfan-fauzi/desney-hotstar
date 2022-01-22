import { useContext } from "react"
import { ReviewComment } from ".."
import { Gap, InfoTambahan, ListActors, ListCarouselMovie, MenuButtonMobile } from "../.."
import { SimilarMovieContext } from "../../../utils/config/context"
import ImageHeader from "./image-header"
import TitleGenreSinopsis from "./title-genre-sinopsis"
import {AiOutlineHome} from 'react-icons/ai'
import { useRouter } from "next/dist/client/router"

const DetailMobile = () => {
  const [similarMovie, setSimilarMovie] = useContext(SimilarMovieContext)
  const router = useRouter()
  
  return (

    <section>
     <button onClick={() => router.push('/')} className="fixed top-5 right-5 z-[60] rounded-full bg-red-500 p-3"><AiOutlineHome size={20} color="#fff"/></button>
      <article>
        <ImageHeader />
      </article>
      <article className="relative -top-5">
        <TitleGenreSinopsis />
      </article>
      <article className="bg-white">
        <Gap className='h-5' />
        <ListActors />
        <Gap className='h-5' />
        <div className="px-4">
          <InfoTambahan />
          <Gap className='h-5' />
          <ReviewComment />
          <Gap className='h-5' />
          <p className="text-xl font-semibold">Similar Movies :</p>
        </div>
        <Gap className='h-5' />
        {
           similarMovie && (
             <ListCarouselMovie movies={similarMovie.results} />
           )
         }
        <Gap className='h-5' />
      </article>      
  
    </section>
  )
}

export default DetailMobile
