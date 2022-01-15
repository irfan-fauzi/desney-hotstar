import Image from 'next/image'
import CONFIG from '../../utils/config/config'
import { fetchDetail } from "../../utils/fetch-ssr"
import { Layout } from '../../components'


export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  if(reqDetail.success == false) {
    return {
      notFound: true
    }
  }
  return {
    props: {reqDetail}
  }
}

const Detail = ({reqDetail}) => {  
  
  return (
    <Layout>
      <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} width={200} height={300}/>
      <p>{reqDetail.title}</p>
      <img src={CONFIG.BASE_IMAGE_URL + reqDetail.backdrop_path} alt="" />
    </Layout>
  )
}

export default Detail
