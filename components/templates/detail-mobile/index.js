
import { ReviewComment } from ".."
import { Gap, InfoTambahan, ListActors, ListCarouselMovie } from "../.."
import ImageHeader from "./image-header"
import TitleGenreSinopsis from "./title-genre-sinopsis"

const DetailMobile = () => {

  return (
    <section>
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
       
        <Gap className='h-5' />
      </article>      
  
    </section>
  )
}

export default DetailMobile
