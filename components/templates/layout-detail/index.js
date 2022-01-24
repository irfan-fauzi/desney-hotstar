import { Footer, Header} from "../.."

const LayoutDetail = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 font-source-san lg:flex lg:flex-col">
        <Header />
          { children }
        <Footer />
    </div>
    
    
  )
}

export default LayoutDetail
