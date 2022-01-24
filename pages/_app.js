import 'tailwindcss/tailwind.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LoadingProvider, MovieProvider, PreviewProvider, ShowMenuProvider, SimilarMovieContext, SimilarMovieProvider } from '../utils/config/context'
function MyApp({ Component, pageProps }) {
  return (
    <SimilarMovieProvider>
    <MovieProvider>
      <PreviewProvider>
        <ShowMenuProvider>
          <Component {...pageProps} />
        </ShowMenuProvider>
      </PreviewProvider>
    </MovieProvider>
    </SimilarMovieProvider>
    
    
  )
}

export default MyApp
