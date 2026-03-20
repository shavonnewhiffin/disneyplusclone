import React from 'react'
import logo from './../assets/Images/disney.png'

const Footer = () => {
  return (
<section className="w-full flex justify-center bg-[#0e101b] w-full">
  <div className="flex flex-col items-center w-full max-w-8xl px-4">
    <figure className="w-[140px] mb-4"  
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
      <img src={logo} alt="disney-logo" className="hover:scale-110 ease-in-out duration-200 cursor-pointer" />
    </figure>

    <div className="w-full">
      <ul className="text-white flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-xs cursor-pointer ">
        <li>Subscriber Agreement</li>
        <li>Disney Terms of Use</li>
        <li>Privacy Policy</li>
        <li>US State Privacy Rights</li>
        <li>Do Not Sell or Share My Personal Information</li>
        <li>Children's Online Privacy Policy</li>
        <li>Help</li>
        <li>Closed Captioning</li>
        <li>Supported Devices</li>
        <li>Gift Disney+</li>
        <li>About Us</li>
        <li>Disney+ Partner Program</li>
        <li>Internet-based Ads</li>
      </ul>
    </div>

    <div className="text-gray-400 flex flex-col items-center text-xs mt-4 mb-10 text-center">
      <p>© Disney. All Rights Reserved.</p>
    </div>

  </div>
</section>

  )
}

export default Footer