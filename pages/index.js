
import Head from 'next/head'
import { fetchGenre, fetchNowPlaying } from '../utils/fetch-ssr'
import { BannerCarousel, Documentary, Drama, Gap, Layout, NowPlaying, Upcoming } from '../components'



export default function Home({nowPlaying, upComing, drama, documentary}) {

  return (
    <>
      <Head>
        <title>Desney clone</title>
      </Head>

      <Layout>
        <BannerCarousel nowPlaying={nowPlaying} />
        <NowPlaying nowPlaying={nowPlaying} />
        <Upcoming upComing={upComing}/>
        <Drama drama={drama}/>
        <Documentary documentary={documentary} />
        <Gap className='h-50' />
      </Layout>
      
    </>
  )
}

export const getStaticProps = async () => {
  const nowPlaying = await fetchNowPlaying()
  const upComing = await fetchGenre(10749)
  const drama = await fetchGenre(18)
  const documentary = await fetchGenre(10402)
  
  if(!nowPlaying || !Upcoming || !drama){
    return {
      notFound: true
    }
  }
  return {
    props : {
       nowPlaying,
       upComing,
       drama,
       documentary
    }
  }
}