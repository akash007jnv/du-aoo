import React,{useContext, useEffect,useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import client from '../Sanity/sanity';
import moment from 'moment';
import Link from 'next/link';
import { GlobalData } from '../pages/_app';
function Coura() {


  const [News, setNews] = useState([])
 const {FeaturedPost, setFeaturedPost} = useContext(GlobalData)
 
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
  
  return (

<Carousel
 className='bg-white shadow-lg rounded-md lg:w-[700px] py-10 '
     infiniteLoop= {true}
     
    autoPlay={true}
showThumbs={false}     
     >
      {News.map((f)=>{
        const displayText = f.title.substring(0, 197) + "...";
        return(<>
<Link onClick={()=>{setFeaturedPost(f._id)}} href='/SelectedFeatured'>
                <div className=''>
                    <p className="text-black text-xl Laato  px-5 ">{displayText}</p>
                    <p className=" text-[15px] font-mono text-gray-500 px-10 ">Updated on {moment(f.publishedAt).format('dddd, MMMM Do YYYY')}</p>
                    <img className='w-20  md:w-[400px] md:h-[300px]  rounded-lg px-10' src={f.imageUrl} />

                </div>
                </Link>
        </>
              
              )
            })}
            </Carousel>
     
   
  )
}

export default Coura