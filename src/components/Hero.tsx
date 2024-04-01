import Navbar from '@/components/Navbar'
import { FaAngleDoubleDown } from 'react-icons/fa'
export default function Hero() {
    return (
        <div className='bg-[#f0efea] h-screen relative'>
            <Navbar />
            <div className='flex flex-col items-center  p-5 text-center sm:gap-28 gap-20'>
                <div className='sm:mt-36 mt-16 '>
                    <p className='font-bold rounded-full bg-white text-lg p-5'>Hi, I'm Ahmed 🖐</p>
                </div>
                <div className=''>
                    <h2 className='sm:text-7xl text-4xl font-bold'>Full-Stack web developer</h2>
                </div>
                <div>
                    <p className='text-lg'>
                        I would be happy to help create a user-friendly and powerfull website.
                    </p>
                </div>
                <div>
                    <a href="#about">
                        <FaAngleDoubleDown className='animate-bounce text-[#ffae14] text-2xl' />
                    </a>
                </div>
            </div>
            <div className='h-20 absolute bottom-0 right-0 left-0 bg-[#76d6c6] flex items-center justify-evenly '>
                <div >
                    <img className='w-10 h-10' src="/loading1.svg" alt="loading" />
                </div>
                <div >
                    <img className='w-10 h-10' src="/loading1.svg" alt="loading" />
                </div>
                <div >
                    <img className='w-10 h-10' src="/loading1.svg" alt="loading" />
                </div>
                <div >
                    <img className='w-10 h-10' src="/loading1.svg" alt="loading" />
                </div>
            </div>
        </div>
    )
}