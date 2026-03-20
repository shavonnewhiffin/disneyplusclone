import React from 'react'

const HeaderItem = ({name, Icon, showText = true}) => {
  return (
    <div className='  text-white flex items-center 
        gap-1 md:gap-2 lg:gap-3
        text-[16px] md:text-[18px] lg:text-[15px]
        font-semibold cursor-pointer 
        hover:underline underline-offset-4 md:underline-offset-6 lg:underline-offset-8
        mb-2 mt-3'>
        <Icon/>
        {showText && <h2 className='text-[16px]'>{name}</h2>}
    </div>
  )
}

export default HeaderItem