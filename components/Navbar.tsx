import Link from "next/link";
import { BsFacebook, BsInstagram, BsDiamondFill } from "react-icons/bs"
import './navbar.css'

export default function Navbar(){

    const navLinkStyle: string = "text-neutral-700 hover:text-neutral-100 hover:transition hover:duration-300 duration-700 hover-underline-animation"

    const navLinkGreen: string = "text-neutral-600 hover:text-nicki-green-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-green"

    const navLinkPink: string = "text-neutral-600 hover:text-nicki-pink-deep hover:transition hover:duration-300 duration-700 hover-underline-animation-pink"

    return (
      <div className="fixed w-full h-20 bg-gradient-to-b from-red-50 from-20% to-nicki-pink-pale flex justify-between items-center px-6 text-2xl text-neutral-600 shadow-lg">
      {/* <div className="fixed w-full h-20 bg-gradient-to-br from-[#c6b89b] from-0% via-[#f6efcd] via-50% to-[#c6b89b] to-100% flex justify-between items-center px-6 text-2xl text-neutral-600 shadow-lg"> */}
      {/* <div className="fixed w-full h-20 bg-gradient-to-b from-[#c6aa72] from-0% via-[#fbf1c5] via-50% to-[#c6aa72] to-100% flex justify-between items-center px-6 text-2xl text-neutral-600 shadow-lg"> */}
      {/* <div className="fixed w-full h-20 bg-gradient-to-b from-[#bf953f] from-0% via-[#fcf6ba] via-50% to-[#bf953f] to-100% flex justify-between items-center px-6 text-2xl text-neutral-600 shadow-lg"></div> */}
        <h1>Bookings: 555-1234</h1>
        <ul className="list-none w-1/2 flex justify-evenly items-center">
            <li>
                <Link href="/" className={navLinkGreen}>Home</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/services" className={navLinkPink}>Services & Pricing</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1 text-[#c2a56c]" /></li>
            <li>
                <Link href="/gallery" className={navLinkGreen}>Gallery</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1 text-[#c2a56c]" /></li>
            <li>
                <Link href="/about" className={navLinkPink}>About Me</Link>
            </li>
            <li><BsDiamondFill size={10} className="mt-1" /></li>
            <li>
                <Link href="/contact" className={navLinkGreen}>Contact</Link>
            </li>
        </ul>
        <div className="flex row w-24 justify-between">
            <BsFacebook size={32}/>
            <BsInstagram size={32}/>
        </div>
      </div>
    )
}