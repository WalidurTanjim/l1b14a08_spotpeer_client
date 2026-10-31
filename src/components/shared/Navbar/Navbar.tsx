"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
     const [menuOpen, setMenuOpen] = React.useState(false);
     const navItems = [
          { path: "Home", href: "/" },
          { path: "Explore Studios", href: "/studios" },
          { path: "How It Works", href: "#how-it-works" },
          { path: "About Us", href: "#about-us" }
     ]
     const pathname = usePathname();

     return (
          <nav className="bg-white px-5 md:px-8 lg:px-12 xl:px-20 w-full max-w-7xl mx-auto py-4 flex items-center justify-between relative">
               <Link href="/" className='text-lg font-semibold text-slate-700'>SpotPeer</Link>

               {/* Desktop Navigation Links */}
               <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                    {navItems.map((item, idx) => (
                         <Link 
                              key={idx} 
                              href={item?.href} 
                              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${item?.href === pathname ? 'bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600' : 'text-zinc-500 hover:text-zinc-400'}`}
                         >
                              {item?.path}
                         </Link>
                    ))}
               </div>

               {/* Desktop Signin & Signup Buttons (Updated to match small device styling) */}
               <div className='hidden md:flex items-center gap-2.5'>
                    <Link 
                         href="/signin" 
                         className="flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium px-5 py-2 rounded-lg transition-colors"
                    >
                         Signin
                    </Link>
                    <Link 
                         href="/signup" 
                         className="flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-zinc-50 text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm"
                    >
                         Signup
                    </Link>
               </div>

               {/* Mobile Hamburger Button */}
               <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1" aria-label="Toggle Menu">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
               </button>

               {/* Mobile Dropdown Menu */}
               {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 shadow-lg flex flex-col p-5 gap-3 md:hidden z-50">
                         {navItems.map((item, idx) => (
                              <Link 
                                   key={idx} 
                                   href={item?.href} 
                                   onClick={() => setMenuOpen(false)}
                                   className={`px-4 py-2 rounded-lg text-sm transition-colors ${item?.href === pathname ? 'bg-zinc-100 font-medium text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`}
                              >
                                   {item?.path}
                              </Link>
                         ))}
                         
                         <div className="h-px bg-zinc-100 my-1" />

                         {/* Mobile Signin & Signup Buttons */}
                         <div className='flex items-center gap-3 w-full'>
                              <Link 
                                   href="/signin" 
                                   onClick={() => setMenuOpen(false)}
                                   className="flex-1 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium py-2.5 rounded-lg transition-colors"
                              >
                                   Signin
                              </Link>
                              <Link 
                                   href="/signup" 
                                   onClick={() => setMenuOpen(false)}
                                   className="flex-1 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-zinc-50 text-sm font-medium py-2.5 rounded-lg transition-colors"
                              >
                                   Signup
                              </Link>
                         </div>
                    </div>
               )}
          </nav>
     )
}

export default Navbar