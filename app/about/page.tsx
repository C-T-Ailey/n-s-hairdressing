import "./page.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Nicki Sims Hair'
}

export default function About() {
  return (
    <div className="text-[#606060] mt-6">
      <h1 className="underline text-center text-3xl">
        About Me
      </h1>
    </div>
  )
}
