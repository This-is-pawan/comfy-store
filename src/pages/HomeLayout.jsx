
import { Outlet } from "react-router-dom"
import {Header,Navbar} from '../components'
const HomeLayout = () => {
  return (
    <>
 <Header/>
 <Navbar/>
    <nav>
   
    </nav>
    <section className="align-element py-20">

    <Outlet/>
    </section>
    </>
  )
}

export default HomeLayout
