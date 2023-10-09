import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-36 items-center justify-around p-3 bg-black text-white text-xl font-medium  border-b-2 sticky top-0 '>
        <div className='flex gap-10'>
        <div className='text-green-400'>Home</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Experience</div>
        </div>
        <div>
            <button className='bg-white text-black p-5 rounded-full'>Contact Me</button>
        </div>
    </div>
  )
}

export default Header;