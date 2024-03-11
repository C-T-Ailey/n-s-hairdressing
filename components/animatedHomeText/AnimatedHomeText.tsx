'use client';

import Image from 'next/image'
import transpLogo from '../public/transp-logo.png'
import { Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Home | Nicki Sims Hair'
}

export default function Home() {

  const [textSkip, setTextSkip] = useState(false)

  const [skipCount, setSkipCount] = useState(0)

  const skipLine = () => {
    if (skipCount < 5) {
        setSkipCount(skipCount + 1)
    }
  }

  return (
    
      <div className='h-[40vh] flex flex-col justify-center lg:justify-end'>
        
        <div className='h-[40vh] lg:h-[30vh] w-[90vw] flex flex-col justify-around text-center lg:text-2xl text-[#606060]' style={{userSelect:"none"}}>
          <p className={skipCount >= 1 ? '' : 'animate-fade animate-once animate-duration-1000 animate-ease-in'} onAnimationEnd={() => skipLine()}>Hi! I&apos;m Nicki.</p>
          <p className={skipCount >= 2 ? '' : 'animate-fade animate-once animate-duration-1000 animate-delay-[1500ms] animate-ease-in'} onAnimationEnd={() => skipLine()}>As an independent stylist with over 25 years of experience in the salon,</p>
          <p className={skipCount >= 3 ? '' : 'animate-fade animate-once animate-duration-1000 animate-delay-[3000ms] animate-ease-in'} onAnimationEnd={() => skipLine()}>I know how important that personal touch is when it comes to your haircare.</p>
          <p className={skipCount >= 4 ? '' : 'animate-fade animate-once animate-duration-1000 animate-delay-[4500ms] animate-ease-in'} onAnimationEnd={() => skipLine()}>That&apos;s why, whoever you are and whatever you need,</p>
          <p className={skipCount >= 5 ? '' : 'animate-fade animate-once animate-duration-1000 animate-delay-[6000ms] animate-ease-in'} onAnimationEnd={() => skipLine()}>my priority will always be to make sure you get the attention and service you deserve.</p>
          <i className={skipCount >= 5 ? 'bi bi-fast-forward-fill mx-auto animate-fade animate-reverse animate-once animate-duration-500 animate-ease-out pointer-events-none' : 'bi bi-fast-forward-fill mx-auto'} style={{cursor:"pointer", fontSize: "2rem", width: "fit-content"}} onClick={() => skipLine()}></i>
        </div>
      </div>
  )
}