import 'tailwindcss/tailwind.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LoadingProvider, MovieProvider, PreviewProvider, ShowMenuProvider, SimilarMovieContext, SimilarMovieProvider } from '../utils/config/context'
function MyApp({ Component, pageProps }) {
  return (
    
    <MovieProvider>
      <PreviewProvider>
        <SimilarMovieProvider>
        <Component {...pageProps} />
        </SimilarMovieProvider>
      </PreviewProvider>
    </MovieProvider>
   
    
    
  )
}

export default MyApp
