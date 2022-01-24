import { Container } from ".."
import { Footer, Header, HeaderDetail } from "../.."
import { MovieProvider, PreviewProvider, ShowMenuProvider, SimilarMovieProvider } from "../../../utils/config/context"


const LayoutDetail = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 font-source-san lg:flex lg:flex-col">
      
      <ShowMenuProvider>
        <Header />
          { children }
        <Footer />
      </ShowMenuProvider>
     
    </div>
    
    
  )
}

export default LayoutDetail
