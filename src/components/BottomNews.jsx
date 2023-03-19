import React,{useContext, useEffect,useState} from 'react'
import client from '../Sanity/sanity';
import moment from 'moment';
import Link from 'next/link';
import { GlobalData } from '../pages/_app';

const BottomNews = () => {
    const [News, setNews] = useState([])
    const {Article, setArticle} = useContext(GlobalData)

    useEffect(() => {
        client.fetch(`
        *[_type == 'news']  | order(publishedAt desc) {
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
  return (
    <>
    <div className='  flex flex-col gap-2 mt-2 w-full mb-3 lg:w-[500px]  '>
 
    {News.slice(5,200).map((f)=>{
 
 const displayText = f.title.substring(0, 90) + "...";
      return(
        
    <Link onClick={()=>{setArticle(f._id)}}  href="/SelectedArticle" >
 
        <div className=' h-[120px] bg-white relative shadow-md hover:shadow-xl hover:transform hover:scale-100 duration-300 rounded-md w-full px-2 flex justify-between flex-row md:px-10 py-4'>
 <h1 className='text-[#212121]   Hd sm:text-[15px] md:text-lg  md:Laato'>{displayText}</h1>
 <img className='h-[84px] w-[113px] rounded-md' src={f.imageUrl} />
 
       <div className='absolute bottom-0 left-0 w-full flex flex-row '>
 <p className=" text-[15px]   Hd text-gray-400 font-thin px-10 ">Updated on {moment(f.publishedAt).format('dddd, MMMM Do YYYY')}</p>
 
 <h1></h1>
 </div>
       </div>
    </Link>
 
     )
   })}
   </div>
     </>
  )
}

export default BottomNews