import Head from 'next/head'
import { fetchNowPlaying, fetchUpcoming } from '../utils/fetch-ssr'
import { BannerCarousel, Family, Layout, NowPlaying, Upcoming } from '../components'


export default function Home(props) {  
  return (
    <>
      <Head>
        <title>Desney clone</title>
      </Head>
      <Layout>
        <BannerCarousel nowPlaying={props.nowPlaying} />
        <NowPlaying nowPlaying={props.nowPlaying} />
        <Upcoming upComing={props.upComing}/>
        <Family />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const nowPlaying = await fetchNowPlaying()
  const upComing = await fetchUpcoming()
  return {
    props : {
       nowPlaying,
       upComing
    }
  }
}