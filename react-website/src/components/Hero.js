import React from 'react'


function Hero() {
  return (
    <div>
      <section className=''>
        <images className="flex wrap justify-center pt-4">
            <div className='flex justify-center w-52 height '>
                <img className='h-64 w-48 rounded-2xl p-1 mt-44 object-cover' src='/images/img2.webp'/>
            </div>
            <div className='flex  flex-col w-52 height pt-20 gap-2 '>
                <img className='h-48 w-48 rounded-2xl p-1 object-cover' src='/images/img3.webp'/>
                <img className='h-60 w-48 rounded-2xl p-1 object-cover' src='/images/img4.webp'/>
            </div>
            <div className='flex flex-col w-52 height pt-32 gap-2'>
                <img className='h-56 w-48 rounded-2xl p-1 object-cover' src='/images/img5.webp'/>
                <img className='h-56 w-48 rounded-2xl p-1 object-cover' src='/images/img6.webp'/>
            </div>
            <div className='flex flex-col w-52 height pt-12 gap-2'>
                <img className='h-56 w-48 rounded-2xl p-1 object-cover' src='/images/img7.webp'/>
                <img className='h-60 w-48 rounded-2xl p-1 object-cover' src='/images/img8.webp'/>
            </div>
            <div className='flex flex-col w-52 height pt-24 gap-2'>
                <img className='h-60 w-48 rounded-2xl p-1 object-cover' src='/images/img9.webp'/>
                <img className='h-56 w-48 rounded-2xl p-1 object-cover' src='/images/img10.webp'/>
            </div>
        </images>

        <text>
                <h1 className='h1 pl-9 pb-7 '>Online Experiences</h1>
                <p className='p pl-9 text-gray-700 pr-14'>Embark on a journey of exploration with our travel website, where wanderlust meets convenience. Discover a world of possibilities as you navigate through a treasure trove of destinations, each with its own unique charm and allure. Our user-friendly interface makes trip planning a breeze, allowing you to seamlessly browse through a curated collection of travel experiences. </p>
        </text>
      </section>
    </div>
  )
}

export default Hero
