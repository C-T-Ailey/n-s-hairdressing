"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { BsFacebook, BsInstagram, BsDiamondFill } from "react-icons/bs"
import './navbar.css'
import NavbarLogo from '../../public/logo-text-small.png'
import Wreath1 from '../../public/floral/wreath-1.png'
import Wreath2 from '../../public/floral/wreath-2.png'
import Wreath3 from '../../public/floral/wreath-3.png'
import Wreath4 from '../../public/floral/wreath-4.png'
import Wreath5 from '../../public/floral/wreath-5.png'
import { usePathname } from 'next/navigation';

export default function Navbar(){

    const path = usePathname()

    const navLinkGreen: string = "text-neutral-600 hover:text-nicki-green-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-green"

    const selectedNavGreen: string = "select-none pointer-events-none selected-underline-green"

    const navLinkPink: string = "text-neutral-600 hover:text-nicki-pink-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-pink"

    const selectedNavPink: string = "select-none pointer-events-none selected-underline-pink"

    return (
      <div className="nav fixed w-full bg-gradient-to-b from-nicki-pink-pale from-10% to-red-50 flex justify-between md:items-center px-2 md:px-6 text-neutral-600 text-base xl:text-2xl shadow-lg h-[5rem]">
        <div className='flex flex-row items-center w-20'>
            <Image className='absolute z-10 w-[7rem]' src={NavbarLogo} alt="nav logo"></Image>
            
        </div>
        <ul className="list-none w-1/2 hidden md:flex justify-evenly items-center">
            <li>
                <Link href="/" id="home" className={path === "/" ? selectedNavGreen : navLinkGreen}>Home</Link> 
            </li>
            <li className='pb-1'>
                <i className="bi bi-diamond-fill text-xs"></i>
            </li>
            <li>
                <Link href="/services" id="services" className={path === "/services" ? selectedNavPink : navLinkPink} >Services & Pricing</Link>
            </li>
            <li className='pb-1'>
                <i className="bi bi-diamond-fill text-xs"></i>
            </li>
            <li>
                <Link href="/gallery" id="gallery" className={path === "/gallery" ? selectedNavGreen : navLinkGreen} >Gallery</Link> 
            </li>
            <li className='pb-1'>
                <i className="bi bi-diamond-fill text-xs"></i>
            </li>
            <li>
                <Link href="/about" id="about me" className={path === "/about" ? selectedNavPink : navLinkPink} >About Me</Link> 
            </li>
            <li className='pb-1'>
                <i className="bi bi-diamond-fill text-xs"></i>
            </li>
            <li>
                <Link href="/contact" id="contact" className={path === "/contact" ? selectedNavGreen : navLinkGreen} >Contact</Link>
            </li>
        </ul>
        <div className="flex w-30 items-center">
            <h1 className=''>Bookings:<br/>07123 345678</h1>
        </div>
        {/* <div className='wreath-1-container'>
            <Image className='wreath-1' src={Wreath1} alt='decorative fronds'/>
        </div> */}
        {/* <div className='wreath-decoration'>
            <Image className='absolute z-0' src={Wreath2} alt=''/>
            <Image className='absolute z-0' src={Wreath3} alt=''/>
            <Image className='absolute z-0' src={Wreath4} alt=''/>
            <Image className='absolute z-0' src={Wreath5} alt=''/>
        </div> */}
      </div>
    )
}