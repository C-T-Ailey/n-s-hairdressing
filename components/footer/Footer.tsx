"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import './footer.css'

import { usePathname } from 'next/navigation';

export default function Footer(){

    const path = usePathname()

    return (
      <div className="nav w-full h-48 bg-gradient-to-b from-[#c8dbba] from-50% to-nicki-green-pale flex flex-col justify-evenly items-center px-6 text-neutral-600 foot-shadow">
        <div className="flex row w-32 h-8 justify-between items-center">

            <i id="fb" className="bi bi-facebook"></i>

            <i id="insta" className="bi bi-instagram"></i>
            
        </div>
        <div className='flex flex-row w-full justify-center'>
            <ul className=" list-none w-1/4 flex justify-evenly items-center">
                <li>
                    <Link href="/" id="home" className={''}>Home</Link> 
                </li>
                <li >
                    <i className="bi bi-diamond-fill text-xs"></i>
                </li>
                <li>
                    <Link href="/services" id="services" className={''} >Services & Pricing</Link>
                </li>
                <li >
                    <i className="bi bi-diamond-fill text-xs"></i>
                </li>
                <li>
                    <Link href="/gallery" id="gallery" className={''} >Gallery</Link> 
                </li>
                <li >
                    <i className="bi bi-diamond-fill text-xs"></i>
                </li>
                <li>
                    <Link href="/about" id="about me" className={''} >About Me</Link> 
                </li>
                <li >
                    <i className="bi bi-diamond-fill text-xs"></i>
                </li>
                <li>
                    <Link href="/contact" id="contact" className={''} >Contact</Link>
                </li>
            </ul>
        </div>
        <div className='w-1/4 h-4 flex flex-row justify-between items-center'>
            <div className='flex flex-row'>
                <i className="bi bi-c-circle pr-1"></i>
                <p>Nicki Sims 2023</p>
            </div>
            <i className="bi bi-diamond-fill text-xs"></i>
            <p>Privacy Policy</p>
            <i className="bi bi-diamond-fill text-xs"></i>
            <p>Web Design by Chris Ailey</p>
        </div>
      </div>
    )
}