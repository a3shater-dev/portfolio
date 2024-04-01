import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
export default function Navbar() {
    const navLinks = [
        {
            name: 'linedin',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/a3shater'
        },
        {
            name: 'github',
            icon: FaGithubSquare,
            href: 'https://github.com/a3shater'
        }
    ]
    return (
        <div className="flex items-center justify-between max-w-7xl mx-auto p-5">
            <div>
                <Link href={'/'} className="cursor-pointer bg-black rounded-full w-12 h-12 text-white font-bold flex justify-center items-center text-xl">A</Link>
            </div>
            <div className="flex gap-3">
                {navLinks.map((ele) => {
                    return <a key={ele.name} href={ele.href} target="_blank" ><ele.icon className="rounded-full text-2xl" /></a>
                })}
            </div>
        </div>
    )
}