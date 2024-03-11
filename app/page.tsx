import { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import transpLogo from '../public/transp-logo.png'
import AnimatedHomeText from '../components/animatedHomeText/AnimatedHomeText'

export const metadata: Metadata = {
  title: 'Home | Nicki Sims Hair'
}

export default function Home() {

  // const [textSkip, setTextSkip] = useState(false)

  return (
    <main className="flex flex-col items-center justify-center">

      <div className="flex place-items-start max-h-[50vh] max-w-[50vh]">
        <Image
            className="lg:mt-[6vh]"
            src={transpLogo}
            alt="Nicki Sims Hair logo"
            // style={{height: "50vh", width: "auto"}}
            priority
          />
      </div>
      <AnimatedHomeText />
    </main>
  )
}
