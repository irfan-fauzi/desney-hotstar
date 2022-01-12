import Header from "../../organisms/header"

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />
      { children }
    </div>
  )
}

export default Layout
