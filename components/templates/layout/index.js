import { Header, Footer } from "../.."
import { ShowMenuProvider } from "../../../utils/config/context"

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-900 font-roboto'>
      <ShowMenuProvider>
      <Header />
      { children }
      <Footer />
      </ShowMenuProvider>
    </div>
  )
}

export default Layout
