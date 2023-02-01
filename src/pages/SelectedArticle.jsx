import client from '../Sanity/sanity'
import React, { useContext ,useState ,useEffect} from 'react'
import { GlobalData } from './_app'
import moment from 'moment'


function SelectedArticle() {
  const {Article} = useContext(GlobalData)

  const [News, setNews] = useState([])

  useEffect(() => {
    client.fetch(`
    *[_type == 'news']{
      _id,
        excerpt,
        categories,
        "imageUrl": mainImage.asset->url,
        
        publishedAt,
       author,
        title,
        slug
      }
    `).then((data)=>{
     console.log(data)
     setNews(data)
    })
   }, [])

   const filteredData = News.filter(item => item._id == Article);

  return (
    <>
    {filteredData.map((g)=>{
      return(
        <div className='flex  flex-col h-screen w-full items-center  mt-[100px] px-2'>
  <div className='h-auto md:w-[500px] w-[350px] flex flex-col gap-2 px-2 py-4  bg-white shadow-md rounded-md '>
  <img src={g.imageUrl}/>
          <h1 className='Laato px-3 md:px-0 w-full'>{g.title}</h1>
          
          <p className=" text-[15px] Laato    text-gray-500 px-10 ">Updated on {moment(g.publishedAt).format('dddd, MMMM Do YYYY')}</p>
          <p>
            {g.excerpt}
          </p>
  </div>
        </div>
      )
    })}
      </>
  )
}

export default SelectedArticle