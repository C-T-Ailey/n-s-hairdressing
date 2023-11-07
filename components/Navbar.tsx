"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { BsFacebook, BsInstagram, BsDiamondFill } from "react-icons/bs"
import './navbar.css'
import NavbarLogo from '../public/logo-textonly-small.png'
import { usePathname } from 'next/navigation';

export default function Navbar(){

    const path = usePathname()

    const navLinkGreen: string = "text-neutral-600 hover:text-nicki-green-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-green"

    const selectedNavGreen: string = "select-none pointer-events-none selected-underline-green"

    const navLinkPink: string = "text-neutral-600 hover:text-nicki-pink-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-pink"

    const selectedNavPink: string = 'select-none pointer-events-none selected-underline-pink'

    const activeLink = () => {
        console.log(path)
    }

    return (
      <div className="nav fixed w-full h-20 bg-gradient-to-b from-red-50 from-10% to-nicki-pink-pale flex justify-between items-center px-6 text-2xl text-neutral-600 shadow-lg">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
        <div className='flex flex-row items-center'>
            
            <h1 className='pl-1'>Bookings: 555-1234</h1>
        </div>
        <ul className="list-none w-1/2 flex justify-evenly items-center mr-32">
            <li>
                <Link href="/" id="home" className={path === "/" ? selectedNavGreen : navLinkGreen} onClick={() => activeLink()}>Home</Link> 
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/services" id="services" className={path === "/services" ? selectedNavPink : navLinkPink} onClick={() => activeLink()}>Services & Pricing</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/gallery" id="gallery" className={path === "/gallery" ? selectedNavGreen : navLinkGreen} onClick={() => activeLink()}>Gallery</Link> 
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/about" id="about me" className={path === "/about" ? selectedNavPink : navLinkPink} onClick={() => activeLink()}>About Me</Link> 
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/contact" id="contact" className={path === "/contact" ? selectedNavGreen : navLinkGreen} onClick={() => activeLink()}>Contact</Link>
            </li>
        </ul>
        <div className="flex row w-32 h-fit justify-between items-center">
            {/* <BsFacebook size={32}/> */}
            <i className="fa-brands fa-facebook" id="fb"></i>
            {/* <BsInstagram id="insta-icon" size={32}/> */}
            <i className="fa-brands fa-instagram" id="insta" aria-hidden="true"></i>
            
        </div>
      </div>
    )
}