
import { Outlet } from 'react-router-dom'
import Footer from './../components/footers/Footer'
import Header from './../components/headers/Header';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout