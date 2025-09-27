import React, { useState } from 'react'
import { Menu, X } from "lucide-react";

function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        // Hi Learners, please add this top-0 & z-50
        // it will create a offset top value of 0 and z-index of 50 so that
        // our hero component glass design is not overlapping
    <nav className='bg-gray-100 shadow-lg fixed w-full top-0 z-50'>
        {/* reponsiveness */}
        <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
                <div className='text-xl font-extrabold text-red-500'>Shopyfy.</div>
                    {/* Laptop and Desktop screen menu */}
                <div className='hidden md:flex space-x-6'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Profile</a>
                    <a href="#">Help & Support</a>
                </div>

                {/* Mobile menu */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <X /> : <Menu />
                        }
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile menu design */}
        {
            isOpen && (
                <div className='md:hidden bg-gray-100 px-4 pb-4 space-y-2 shadow-md'>
                    <a className='block' href="#">Home</a>
                    <a className='block' href="#">Products</a>
                    <a className='block' href="#">Profile</a>
                    <a className='block' href="#">Help & Support</a>
                </div>
            )
        }

    </nav>
    )
}

export default Navbar