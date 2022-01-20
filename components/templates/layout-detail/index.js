import { Footer, HeaderDetail } from "../.."


const LayoutDetail = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 font-source-san lg:flex lg:flex-col">
      <HeaderDetail />
        { children }
      <Footer />
    </div>
    
  )
}

export default LayoutDetail
