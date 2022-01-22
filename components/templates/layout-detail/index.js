import { Container } from ".."
import { Footer, HeaderDetail } from "../.."
import { MovieProvider, PreviewProvider, ShowMenuProvider, SimilarMovieProvider } from "../../../utils/config/context"


const LayoutDetail = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 font-source-san lg:flex lg:flex-col">
      
      <ShowMenuProvider>
      <HeaderDetail />
        { children }
      <Footer />
      </ShowMenuProvider>
     
    </div>
    
    
  )
}

export default LayoutDetail
