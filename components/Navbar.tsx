import Link from "next/link";
import { BsFacebook, BsInstagram, BsDiamondFill } from "react-icons/bs"

export default function Navbar(){
    return (
      <div className="fixed w-full h-20 bg-white flex justify-between items-center px-6 text-2xl">
        <h1>Bookings: 555-1234</h1>
        <ul className="list-none w-1/2 flex justify-evenly items-center">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/services">Services & Pricing</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/gallery">Gallery</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/about">About Me</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <div className="flex row w-24 justify-between">
            <BsFacebook size={32}/>
            <BsInstagram size={32}/>
        </div>
      </div>
    )
}