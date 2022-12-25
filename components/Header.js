/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { BsBrightnessHigh } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';

const Header = () => {
    let Links = [
        { name: 'work', link: '/work' },
        { name: 'about', link: '/about' },
        { name: 'tools', link: '/tech' },
        { name: 'source', link: '/work-info' },
    ];
    const [isScrolled, setIsScrolled] = useState(false);
    let [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav
            className={`${
                isScrolled && 'bg-opacity-[0.4] shadow-md drop-shadow-lg '
            } font-medium duration-700 bg-opacity-[0.55] transition-all ease-in font-quick z-40  w-[75%] sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto  bg-white drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl `}
        >
            <div className="flex justify-between  md:space-x-0 md:flex items-center place-items-center md:justify-between py-3 md:px-10 px-12">
                <div className="order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
                    {/* <span className=" ml-1 px-2"> */}
                    <Link href={'/'} className="">
                        {' '}
                        <h3 className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-space text-xl font-bold">
                            Noru_{' '}
                        </h3>{' '}
                    </Link>
                </div>
                <div className="w-max md:order-8">
                    <BsBrightnessHigh className="w-5 h-5 " />{' '}
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="transition-all duration-500 ease-in order-3 text-lg  cursor-pointer items-center font-bold md:hidden"
                >
                    {/* {!open ? ( */}
                    <VscThreeBars
                        name="open"
                        className={` ${!open && 'block'} ${
                            open && 'hidden'
                        } transition-all duration-500 ease-in h-6 w-6`}
                    />
                    <VscChromeClose
                        name="menu"
                        className={`${!open && 'hidden'} ${
                            open && 'block'
                        } transition-all duration-500 ease-in stroke-1 h-6 w-6`}
                    />
                    {/* <FaBars name={open ? 'close' : 'menu'} /> */}
                </div>
                <ul
                    className={` rounded-3xl md:rounded-none bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-[3.5rem]' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-base font-regular md:my-0 my-7">
                            <Link
                                href={link.link}
                                className="text-gray-800 hover:text-gray-500 duration-500"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {/* <a href="#socials">
                        <button className="mx-auto md:ml-4 px-2 py-1 md:px-2 font-medium bg-white md:text-white md:bg-blue text-dark-blue shadow-2xl border-inner border-2 rounded-lg  ">
                            Socials
                        </button>
                    </a> */}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
