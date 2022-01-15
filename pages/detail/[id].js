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
      <p>{reqDetail.title}</p>
    </div>
  )
}

export default Detail
