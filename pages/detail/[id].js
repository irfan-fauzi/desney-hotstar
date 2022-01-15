import Image from 'next/image'
import API_ENDPOINT from '../../utils/config/api-endpoint'
import CONFIG from '../../utils/config/config'
import { fetchDetail } from "../../utils/fetch-ssr"

export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  return {
    props: {reqDetail}
  }
}

const Detail = ({reqDetail}) => {  
  
  return (
    <div>
      <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} width={200} height={300}/>
      <p>{reqDetail.title}</p>
      <img src={CONFIG.BASE_IMAGE_URL + reqDetail.backdrop_path} alt="" />
    </div>
  )
}

export default Detail
