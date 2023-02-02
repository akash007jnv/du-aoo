import client from '../Sanity/sanity'
import React, { useContext ,useState ,useEffect} from 'react'
import { GlobalData } from './_app'
import { useRouter } from 'next/router';

import moment from 'moment'

function SelectedFeatured() {
  const {FeaturedPost} = useContext(GlobalData)
  const router = useRouter();
console.log("rOUTER",router)
  
  const id = router.asPath.split('/')[2];

  console.log("This is ",id)
  const [News, setNews] = useState([])
console.log(FeaturedPost)
  useEffect(() => {
    client.fetch(`
    *[_type == 'featuredNews']{
     _id,
       body,
       categories,
       "imageUrl": image.asset->url,
       importantLinks,
       publishedAt,
       source,
       title
     
     }
    `).then((data)=>{
     console.log(data)
     setNews(data)
    })
   }, [])

   const filteredData = News.filter(item => item._id == id);

  
  return (
    <>
  {filteredData.map((g)=>{
    return(
      <div className='flex w-full justify-between  px-10 mt-[100px] md:flex-row flex-col '>
<div className='w-[300px] flex relative  flex-col  items-center   px-2 h-[500px] bg-green-600'>

</div>
<div className='flex  flex-col   items-center   px-2'>
<div className='h-auto md:w-[500px] w-[350px] flex flex-col gap-2 px-2 py-4  bg-white shadow-md rounded-md '>
<img src={g.imageUrl}/>
        <h1 className='Laato px-3 md:px-0 w-full'>{g.title}</h1>
        <p className=" text-[10px] lg:text-[14px]  w-full     font-semibold  text-gray-400   ">Updated on {moment(g.publishedAt).format('dddd, MMMM Do YYYY')}</p>

        <p>
          {g.body}
        </p>
</div>
      </div>


      <div className='w-[300px] h-[500px] bg-green-600'>

</div>

      </div>
   
    )
  })}
    </>
  )
}

export default SelectedFeatured
