import { Hero } from "../components"
import FeatureProducts from "../components/FeatureProducts"
// isback-end url => const url='/products?featured=true'

import {customFetch} from '../utils'
// eslint-disable-next-line react-refresh/only-export-components
export const loader= async()=>{
  const response=await customFetch(customFetch)
const products=response.data.data
  return {products}
}


const Landing = () => {
  return (
    <>
 <Hero/>
 <FeatureProducts/>
     </>
  )
}

export default Landing