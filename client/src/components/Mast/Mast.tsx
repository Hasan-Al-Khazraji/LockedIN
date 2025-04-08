import logo from './Chameleon.png';

export default function Navbar() {
    return (
        <nav className='flex items-center'>
            <img src={logo} className="h-20" alt="logo" />
            <h1 className='text-2xl font-medium'>LockedIN</h1>
        </nav>
    );
}