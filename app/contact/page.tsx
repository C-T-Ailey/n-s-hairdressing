import "./page.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Nicki Sims Hair'
}

export default function Contact() {
  return (
    <div className="text-[#606060] mt-6">
      <h1 className="underline text-center text-3xl">Contact Information</h1>
    </div>
  )
}
