"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='flex p-3 items-center justify-between bg-secondary shadow-sm'>
      {/* Logo aligned to the left */}
      <Image src={'/Mockview.png'} width={100} height={80} alt='logo' />

     
      <div className="flex-grow justify-center">
        <ul className='flex gap-6  items-center justify-center'>
          <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer
            ${path === '/dashboard' ? 'text-primary font-bold' : ''}`}
          >
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer
            ${path === '/dashboard/questions' ? 'text-primary font-bold' : ''}`}
          >
            <Link href="/dashboard/questions">Questions</Link>
          </li>
          <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer
            ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}
          >
            <Link href="/dashboard/upgrade">Upgrade</Link>
          </li>
        
        </ul>
      </div>

      {/* UserButton aligned to the right */}
      <UserButton />
    </div>
  );
}

export default Header;
