import Link from 'next/link';
import React from 'react'
import { useEffect,useState } from 'react';

function Nav() {
    


  const [time, setTime] = useState(new Date());
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[time.getUTCDay()];
  const date = time.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });





  return (
    <>
    <div className="navbar bg-base-100 bg-[#11e29] sticky shadow-md  top-0 z-50">
  <div className="navbar-start">
  
    <div className=' hidden md:block Laato font-semibold ' >
    { `${day},${date}`}
    </div>
   
    
  
   
  
  </div>
  <div className="navbar-center flex flex-col">
   
    <div className='flex items-center '>
    <img className='lg:h-[40px] h-[30px]' src='/logo.svg'/>
    <Link href="/">
    <h1 className="ml-1 normal-case loho  text-2xl">The DU Express</h1>
    </Link>
    
    </div>
 
  
    <div className='  md:hidden  font-semibold ' >
    { `${day},${date}`}
    </div>
  </div>
  <div className="navbar-end">
  {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}
  </div>
</div>
</>
  )
}

export default Nav