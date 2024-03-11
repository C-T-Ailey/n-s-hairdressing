import "./page.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Nicki Sims Hair'
}

export default function Gallery() {
  return (
    <div className="text-[#606060] mt-6">
      <h1 className="underline text-center text-3xl">Gallery</h1>
    </div>
  )
}
