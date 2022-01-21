import { useContext, useEffect } from "react"
import { fetchDetail, fetchReviews } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, LayoutDetail } from '../../components'
import { MovieContext, PreviewContext } from "../../utils/config/context"
import { useRouter } from "next/router"

const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const [preview, setPreview] = useContext(PreviewContext)
  useEffect(() => {
    let componentMounted = true
    if(id != null){
      fetchDetail(id).then((movie) => {
        if(componentMounted){
          setDetailMovie(movie)
        }
      })
      fetchReviews(id).then((review) => {
        if(componentMounted){
          setPreview(review)
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
      {detailMovie && preview && (
          <><div className='lg:hidden block'>
            <DetailMobile reqDetail={detailMovie} />
          </div><div className='hidden lg:block'>
            <DetailDesktop />
          </div></>
      )}
    </LayoutDetail>
  )
}

export default Detail
