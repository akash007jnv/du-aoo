import '@/styles/globals.css'
import { createContext, useState } from 'react'
import Nav from "../components/Nav"

export const GlobalData = createContext()

export default function App({ Component, pageProps }) {
const [FeaturedPost, setFeaturedPost] = useState('')
const [Article, setArticle] = useState('')



  return (
    <>
    <GlobalData.Provider value={{FeaturedPost, setFeaturedPost,Article, setArticle}}>

  <Nav/>
  <Component {...pageProps} />
    </GlobalData.Provider>
  
  </>
  )
}
