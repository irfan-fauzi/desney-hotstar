import { useContext, useEffect, useState } from "react"
import { fetchDetail, fetchReviews, fetchSimilarMovie } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, Gap, LayoutDetail, SkeletonLoading } from '../../components'
import { MovieContext, PreviewContext, SimilarMovieContext } from "../../utils/config/context"
import { useRouter } from "next/router"


const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const [preview, setPreview] = useContext(PreviewContext)
  
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
        <SkeletonLoading />
      ) : (
        detailMovie && preview && (
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
