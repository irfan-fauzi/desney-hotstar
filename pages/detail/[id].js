import { useContext, useEffect } from "react"
import { fetchDetail, fetchReviews } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, LayoutDetail } from '../../components'
import { MovieContext, PreviewContext, PreviewProvider } from "../../utils/config/context"


export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  const reviews = await fetchReviews(params.id)
  if(reqDetail.success == false || reviews.success == false) {
    return {
      notFound: true
    }
  }
  return {
    props: {reqDetail, reviews}
  }
}

const Detail = ({reqDetail, reviews}) => {
 
   
  return (
    <LayoutDetail>
      {detailMovie && preview && (
          <><div className='lg:hidden block'>
            <DetailMobile reqDetail={detailMovie} />
          </div><div className='hidden lg:block'>
            <DetailDesktop reqDetail={detailMovie} reviews={preview} />
          </div></>
      )}
    </LayoutDetail>
    
  )
}

export default Detail
