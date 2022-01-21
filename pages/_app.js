import 'tailwindcss/tailwind.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MovieProvider, PreviewProvider } from '../utils/config/context'
function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <PreviewProvider>
        <Component {...pageProps} />
      </PreviewProvider>
    </MovieProvider>
    
  )
}

export default MyApp
