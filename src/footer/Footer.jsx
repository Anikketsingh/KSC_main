import React from 'react'
import './Footer.css'
import Google from '../assets/Google.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/Facebook.png';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="flex flex-col items-center justify-center py-8 h-80 gap-16 relative z-10">
            <div className="flex gap-16">
            <a href="https://g.co/kgs/YWKeJso" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8" src={Google} alt="Google" />
                </a>
                
                {/* Instagram Link */}
                <a href="https://www.instagram.com/ksc_wellness23?igsh=cmF2Z3RuNGxqNzFv" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8" src={Instagram} alt="Instagram" />
                </a>
                
                {/* Facebook Link */}
                <a href="https://www.facebook.com/share/JZTvcRdMn4PKxd1b/" target="_blank" rel="noopener noreferrer">
                    <img className="w-12 h-8" src={Facebook} alt="Facebook" />
                </a>
            </div>
            <div className="w-40 z-10">
                <img className="w-40 z-10" src={Logo} alt=""/>
            </div>
        </div>
        <div className="absolute bottom-0 right-[15%] w-[26rem] h-[12rem] bg-red-500 blur-[200px]"></div>
        <div className="absolute bottom-0 left-[15%] w-[26rem] h-[12rem] bg-orange-500 blur-[200px]"></div>
    </div>
  )
}

export default Footer