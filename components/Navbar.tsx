import Link from "next/link";

export default function Navbar(){
    return (
      <div className="fixed w-full h-12 bg-white flex justify-evenly items-center">
        <h1>Bookings: 555-1234</h1>
        <ul className=" list-none w-1/3 flex justify-evenly">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/services">Services & Pricing</Link>
            </li>
            <li>
                <Link href="/gallery">Gallery</Link>
            </li>
            <li>
                <Link href="/about">About Me</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <h1>Socials will go here</h1>
      </div>
    )
}