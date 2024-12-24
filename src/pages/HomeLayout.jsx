import { Header } from "../components"
import { Outlet } from "react-router-dom"
const HomeLayout = () => {
  return (
    <>
    <Header/>
    <nav>
      <span className="text-8xl text-primary">comfy</span>
    </nav>
    <section className="align-element py-20">

    <Outlet/>
    </section>
    </>
  )
}

export default HomeLayout
