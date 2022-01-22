import { useContext, useEffect, useState } from "react"
import { fetchDetail, fetchReviews, fetchSimilarMovie } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, Gap, LayoutDetail } from '../../components'
import { LoadingContext, MovieContext, PreviewContext, SimilarMovieContext } from "../../utils/config/context"
import { useRouter } from "next/router"
import API_ENDPOINT from "../../utils/config/api-endpoint"

const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const [preview, setPreview] = useContext(PreviewContext)
  const [similarMovie, setSimilarMovie] = useContext(SimilarMovieContext)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    let componentMounted = true
    if(id != null){
      fetchDetail(id).then((movie) => {
        if(componentMounted){
          setDetailMovie(movie)
          setLoading(false)
        }
      })
      fetchReviews(id).then((review) => {
        if(componentMounted){
          setPreview(review)
          setLoading(false)
        }
      })
      fetchSimilarMovie(id).then((movie) => {
        if(componentMounted){
          setSimilarMovie(movie)
          setLoading(false)
        }
      })
     
    }
    return () => { 
      componentMounted = false
      setPreview(null)
      setDetailMovie(null) 
    }
  },[id])
   
  return (
    <LayoutDetail>
      {loading ? (
        <div className="relative h-[100vh] w-full bg-black">
          <div className="px-4">
            <div className="relative top-20 mx-auto max-w-screen-lg h-[200px] bg-gradient-slider-right animate-pulse"></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
          </div>
        </div>
      ) : (
        detailMovie && preview && similarMovie && (
        <>
        <div className='lg:hidden block'>
          <DetailMobile />
        </div>
        <div className='hidden lg:block'>
          <DetailDesktop />
        </div>
        </>
        )
      )
    }
    </LayoutDetail>
  )
}

export default Detail
