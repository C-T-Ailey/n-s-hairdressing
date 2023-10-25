import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="relative flex place-items-center">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo-main.jpg"
            alt="Nicki Sims Hair logo"
            width={500}
            height={464}
            priority
          />
      </div>
      
    </main>
  )
}
