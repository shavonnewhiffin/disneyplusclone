import React from 'react'

// Styling the Nav links within the header passed from Header.jsx

const HeaderItem = ({name, Icon, showText = true}) => {
  return (
    <div className='text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2'>
        <Icon/>
        {showText && <h2 className='text-white'>{name}</h2>}
    </div>
  )
}

export default HeaderItem