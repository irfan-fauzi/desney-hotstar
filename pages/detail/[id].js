import { useContext, useEffect } from "react"
import { fetchDetail, fetchReviews } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, LayoutDetail } from '../../components'
import { MovieContext, PreviewContext } from "../../utils/config/context"
import { useRouter } from "next/router"

export async function getServerSideProps(context) {
  const { id } = context.query
  const detailMovies = await fetchDetail(id)
  const review = await fetchReviews(id)
  return {
    props : {
      detailMovies,
      review
    }
  }
}

const Detail = ({detailMovies, review}) => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const [preview, setPreview] = useContext(PreviewContext)
  setDetailMovie(detailMovies)
  setPreview(review)
 
  return (
    <LayoutDetail>
      
          <><div className='lg:hidden block'>
            <DetailMobile/>
          </div><div className='hidden lg:block'>
            <DetailDesktop />
          </div></>
      
    </LayoutDetail>
  )
}

export default Detail
