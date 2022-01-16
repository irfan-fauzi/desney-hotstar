import { Header, Footer } from "../.."

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-900 font-roboto'>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
