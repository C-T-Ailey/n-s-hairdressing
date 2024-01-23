import Image from 'next/image'
import transpLogo from '../public/transp-logo.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="flex place-items-start">
        <Image
            className="mt-[6vh]"
            src={transpLogo}
            alt="Nicki Sims Hair logo"
            style={{height: "50vh", width: "auto"}}
            priority
          />
      </div>
      <div className='h-[30vh] flex flex-col justify-center'>
        <div className='h-[20vh] flex flex-col justify-around text-center text-2xl text-[#606060]' style={{userSelect:"none"}}>
          <p className='animate-fade animate-once animate-duration-1000 animate-ease-in'>Hi! I&apos;m Nicki.</p>
          <p className='animate-fade animate-once animate-duration-1000 animate-delay-[1500ms] animate-ease-in'>As an independent stylist with over 25 years of experience in the salon,</p>
          <p className='animate-fade animate-once animate-duration-1000 animate-delay-[3000ms] animate-ease-in'>I know how important that personal touch is when it comes to your haircare.</p>
          <p className='animate-fade animate-once animate-duration-1000 animate-delay-[4500ms] animate-ease-in'>That&apos;s why, whoever you are and whatever you need,</p>
          <p className='animate-fade animate-once animate-duration-1000 animate-delay-[6000ms] animate-ease-in'>my priority will always be to make sure you get the attention and service you deserve.</p>
        </div>
      </div>
    </main>
  )
}
