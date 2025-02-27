import { Phone, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className='flex items-center justify-between gap-2 p-2 container mx-auto bg-white'>
            <Image src={'/logo.svg'} alt='logo' width={200} height={100} className='hidden md:block'/>
            <Image src={'/logo.svg'} alt='logo' width={100} height={100} className='block md:hidden'/>


            <div className='max-w-[500px] p-2 rounded-md border-4 border-primary relative z-40 hidden md:block'>
                {/* Top gradient border that has white in center fading to transparent on sides */}
                <div className='absolute -top-[10px] left-[10%] w-[400px] h-[20px] z-50'
                    style={{
                        background: 'linear-gradient(to right, transparent, transparent 10%, white 40%, white 60%, transparent 90%, transparent)',
                    }}
                />
                
                {/* Bottom gradient border that has white in center fading to transparent on sides */}
                <div className='absolute -bottom-[10px] left-[10%] w-[400px] h-[20px] z-50'
                    style={{
                        background: 'linear-gradient(to right, transparent, transparent 10%, white 40%, white 60%, transparent 90%, transparent)',
                    }}
                />
                
                <p className='text-center text-xs'>TechForing's forensic team helped uncover critical evidence for my case. Their expertise and professionalism made all the difference</p>
                <div className='flex items-center justify-center gap-5 mt-2'>
                    <div className='flex items-center gap-1'>
                        <Star className='fill-yellow-400 stroke-yellow-400' />
                        <Star className='fill-yellow-400 stroke-yellow-400' />
                        <Star className='fill-yellow-400 stroke-yellow-400' />
                        <Star className='fill-yellow-400 stroke-yellow-400' />
                        <Star className='fill-yellow-400 stroke-yellow-400' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg font-semibold text-secondary'>Jonathan K.</p> |
                        <p>USA</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <small className='text-secondary text-right'>CALL US</small>
                <Button className=''><Phone /> +16162718544</Button>
            </div>
        </div>
    )
}

export default Header