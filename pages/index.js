import Head from 'next/head'
import { fetchGenre, fetchNowPlaying } from '../utils/fetch-ssr'
import { BannerCarousel, Drama, Layout, NowPlaying, Upcoming } from '../components'

export default function Home({nowPlaying, upComing, drama}) {
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
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const nowPlaying = await fetchNowPlaying()
  const upComing = await fetchGenre(12)
  const drama = await fetchGenre(18)
  if(!nowPlaying || !Upcoming || !drama){
    return {
      notFound: true
    }
  }
  return {
    props : {
       nowPlaying,
       upComing,
       drama
    }
  }
}