import Link from 'next/link';
import { BsBrightnessHigh } from 'react-icons/bs';
const Header = () => {
    return (
        <nav className="font-quick z-40 w-[45%] h-max bg-white shadow-sm mx-auto px-6 bg-opacity-[0.6] drop-shadow-sm backdrop-blur-md top-4 sticky py-2 flex justify-between items-center space-x-6 rounded-xl ">
            <Link href={'/'} className="">
                <h3 className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-space text-xl font-bold">
                    {' '}
                    Noru_
                </h3>
            </Link>
            <div className="flex space-x-8 font-bold">
                <Link href={'/work'}>work</Link>
                <Link href={'/about'}>about</Link>
                <Link href={'/tech'}>tools I use</Link>
                <Link href={'/work-info'}>source</Link>
            </div>
            {/* <div className="absolute right-16 w-[0.15rem] h-8 rounded-3xl bg-gray-400" ></div> */}
            <div className="">
                <BsBrightnessHigh className="w-5 h-5 " />
            </div>
        </nav>
    );
};

export default Header;
