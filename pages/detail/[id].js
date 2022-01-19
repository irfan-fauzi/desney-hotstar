import { fetchDetail } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, LayoutDetail } from '../../components'

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
    <LayoutDetail>
      <div className='lg:hidden block'>
        <DetailMobile reqDetail={reqDetail} />
      </div>
      <div className='hidden lg:block'>
        <DetailDesktop reqDetail={reqDetail} />
      </div>
    </LayoutDetail>
  )
}

export default Detail
