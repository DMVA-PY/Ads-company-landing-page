'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from "react";
import Logo from '/home/vare/project/frelo/ads_land/landing/public/assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import {LINKS} from '/home/vare/project/frelo/ads_land/landing/public/assets/constants/index.js'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = (e) => {
            if (isOpen) {
                e.preventDefault();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const offset = -70;
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (  
        <div>
            {/* navbar */}
            <nav className='fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950'>
                
                {/* container */}
                <div className='container mx-auto px-4'>
                    <div className='flex h-16 items-center justify-between'>
                        
                        {/* image div */}
                        <div className='flex items-center'>
                            <Link href='/'>
                                <Image
                                    src={Logo}
                                    alt="Description of the image"
                                    width={120} // Specify width
                                    height={20} // Specify height
                                />
                            </Link>
                        </div>

                        {/* button div */}
                        <div>
                            <button 
                                onClick={()=> setIsOpen(!isOpen)}
                                type='button'
                                className='inline-flex items-center justify-center bg-emerald-950 p-2 text-orange-50'
                            >
                                <FaBars className="h-6 w-6"/>
                            </button>
                        </div>

                    </div>

                </div>
            </nav>
            
            {isOpen && (
                <div 
                    className='fixed inset-0 z-20 flex flex-col space-y-0 bg-emerald-950 px-20 pt-20 text-5xl font-bold uppercase text-emerald-100 lg:text6xl'>
                    <button onClick={()=>setIsOpen(false)}
                        type='button'
                        className='absolute right-4 top-4 rounded-full p-2 text-orange-50 lg:right-20'
                    >
                        <FaTimes className='h-8 w-8'/>
                    </button>
                    {LINKS.map((link, index)=>(
                        <a 
                            key={link.id} 
                            href={`#${link.id}`} 
                            onClick={()=>{
                            handleLinkClick(e, link.id)}}
                            className='transition-colors duration-500 hover:text-orange-500'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar