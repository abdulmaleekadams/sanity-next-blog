import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div>
        <Link href='/'>
          <Image
            src='https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/278897634_4931259496928283_6747193395694203611_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=DgMSNQx7pYAAX9QhH77&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB_TTmAEPABIcaomjXsODzbb1Vo-N0OtINbyV3d-NdNKg&oe=6569B73F&_nc_sid=ee9879'
            width={50}
            height={50}
            alt='Logo'
            className='rounded-full'
          />
        </Link>
        <p>KULTURA</p>
      </div>
      <div>
        <Link href='/' className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0a] flex items-center rounded-full text-center'>
          Sign up to the university of code
        </Link>
      </div>
    </header>
  );
};

export default Header;
