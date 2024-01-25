import Link from 'next/link';
import { LightDarkToggle } from './LightDarkToggle';

const Navbar = () => {
  return (
    <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
      <Link
        href='/'
        className='font-bold text-3xl'>
        Sirion&apos;s <span className='text-primary'>Blog</span>
      </Link>
      <LightDarkToggle />
    </nav>
  );
};

export default Navbar;
