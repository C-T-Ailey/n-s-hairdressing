import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">

      <div className="relative flex place-items-start">
        <Image
            className="relative mt-20"
            src="/transp-logo.png"
            alt="Nicki Sims Hair logo"
            width={500}
            height={464}
            priority
          />
      </div>
      
    </main>
  )
}
