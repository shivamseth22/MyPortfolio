// Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const Header = () => {

  const [isOpen , setisOpen] = useState(false)
  const handleResumeClick = () => {
    navigate('/resume')
   };
  const handleContactClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=shivamseth221104@gmail.com';
 };
 const handleCallClick = () => {
  window.location.href = 'tel:9839679467';
};
const handleWhatsappClick = () => {
  // Replace `1234567890` with the desired WhatsApp phone number
  window.location.href = 'whatsapp://send?phone=9839679467';
};

  return (
    <div className='flex gap-36 items-center justify-around p-3 bg-black text-white text-xl font-medium border-b-2 sticky top-0 sm:flex-row'>
     
      <div className='flex gap-10 sm:hidden'>
        <Link to="home" smooth={true} duration={500} className='text-green-400'>Home</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
      </div>
      <div className='flex gap-5 sm:hidden'>
        <button onClick={handleResumeClick} className='bg-white text-black p-3 rounded-full'>Resume</button>
        <button onClick={handleContactClick} className='bg-white text-black p-3 rounded-full'><EmailIcon style={{ fontSize: 40 }}/></button>
        <button onClick={handleCallClick} className='bg-white text-black p-3 rounded-full'><CallIcon style={{ fontSize: 40 }}/></button>
        <button onClick={handleWhatsappClick} className='text-green-400  text-3xl'><WhatsAppIcon style={{ fontSize: 60 }}/></button>
      </div>
      <div className={`flex gap-5 ${isOpen ? 'hidden sm:flex' : 'sm:hidden'}`}>
      <div onClick={()=>setisOpen(!isOpen)} className='sm:hidden'><MenuIcon style={{fontSize:40}} /></div>
    
      
        <Link to="home" smooth={true} duration={500} className='text-green-400'>Home</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
      
        <button onClick={handleResumeClick} className=''>Veiw Resume</button>
        <button onClick={handleContactClick} className='flex'><EmailIcon style={{ fontSize: 30 , paddingRight:"5px" }}/>Mail Me</button>
        <button onClick={handleCallClick} className='flex'><CallIcon style={{ fontSize: 30 }}/>Call Me </button>
        <button onClick={handleWhatsappClick} className='flex '> <WhatsAppIcon style={{ fontSize: 30 , color:"lightgreen" }}/>WhatsApp Me</button>
      </div>
      </div>

   
  );
};

export default Header;
