import React from 'react'
import { disney, marvel, national, pixar, starwar, disneyVideo, marvelVideo, nationalVideo, pixarVideo, starwarsVideo } from './../assets/index2';


const ProductionHouse = () => {

    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyVideo
        },
        {
            id: 2,
            image: pixar,
            video: pixarVideo
        },
        {
            id: 3,
            image: marvel,
            video: marvelVideo
        },
        {
            id: 4,
            image: starwar,
            video: starwarsVideo
        },
        {
            id: 5,
            image: national,
            video: nationalVideo
        }
    ]

  return (
    // Display all of the Production Houses
    <div className="flex items-center justify-center gap-2 md:gap-5 p-2 px-5 md:px-16 sm:w-[550px] md:w-auto sm:m-auto">
        {/* Map over every object in the array and dynamically render image and video */}
        {productionHouseList.map((item)=>(
        <div className="group relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transitional-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black">

         <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-10 opacity-0 group-hover:opacity-50 w-full h-full'/>

            <img src={item.image} className="w-full z-[1]" />
        </div>))}
    </div>
  )
}

export default ProductionHouse