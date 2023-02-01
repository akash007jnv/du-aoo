import client from '../Sanity/sanity'
import React, { useContext ,useState ,useEffect} from 'react'

function Cat() {
    const [News, setNews] = useState([])

  useEffect(() => {
    client.fetch(`
    *[_type == 'category']{
     _id,
      
       title
     
     }
    `).then((data)=>{
     console.log(data)
     setNews(data)
    })
   }, [])
  return (
      <>
        <div className='flex flex-row gap-4  w-full  '>
    {News.map((f)=>{
        return(
            <>
           

                <h1 className='Laato outline-blue-300 outline px-3 py-1 hover:bg-blue-300  rounded-full'>{f.title}</h1>
                </>
                
                )
            })}
            </div>
    </>
  )
}

export default Cat