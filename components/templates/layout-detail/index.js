import { Footer, HeaderDetail } from "../.."


const LayoutDetail = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-900 font-roboto">
      <HeaderDetail />
        { children }
      <Footer />
    </div>
  )
}

export default LayoutDetail
