import Head from 'next/head'
import { fetchGenre, fetchNowPlaying, fetchUpcoming } from '../utils/fetch-ssr'
import { BannerCarousel, Layout, NowPlaying, Upcoming } from '../components'

export default function Home({nowPlaying, upComing}) {
    
  return (
    <>
      <Head>
        <title>Desney clone</title>
      </Head>
      <Layout>
        <BannerCarousel nowPlaying={nowPlaying} />
        <NowPlaying nowPlaying={nowPlaying} />
        <Upcoming upComing={upComing}/>
        
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const nowPlaying = await fetchNowPlaying()
  const upComing = await fetchGenre(12)
  if(!nowPlaying || !Upcoming){
    return {
      notFound: true
    }
  }
  return {
    props : {
       nowPlaying,
       upComing
    }
  }
}