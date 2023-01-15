/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { BsBrightnessHigh } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    let Links = [
        { name: 'work', link: '/work' },
        { name: 'about', link: '/about' },
        { name: 'tech', link: '/tech' },
        { name: 'resume', link: '/resume.pdf' },
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
                isScrolled && 'bg-opacity-[0.7] shadow-md drop-shadow-lg '
            } font-medium duration-700 bg-opacity-90 transition-all max-w-[1000px] select-none ease-in z-40  w-[75%] sm:w-[75%] md:w-[70%] lg:w-[50%] mx-auto  bg-white drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl `}
        >
            <div className="flex justify-between  md:space-x-0 md:flex items-center place-items-center md:justify-between py-3 md:px-10 px-8">
                <div className="order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
                    <Link href={'/'} className="">
                        {' '}
                        <h3 className="bg-gradient-to-tl from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-space text-xl font-bold">
                            Noru_{' '}
                        </h3>{' '}
                    </Link>
                </div>
                <div className="w-max md:order-8">
                    <BsBrightnessHigh className="w-4 md:w-5 h-4 md:h-5 " />{' '}
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-bold md:hidden"
                >
                    <div
                        className={` ${
                            open && 'rotate-45 translate-y-[5px] '
                        } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] fill-black text-black bg-black`}
                    ></div>
                    <div
                        className={` ${
                            open && 'opacity-0 translate-x-20'
                        } relative rounded-xl origin-center transition-all duration-1000 ease-in-out w-4 h-[0.1rem] fill-black text-black bg-black `}
                    ></div>
                    <div
                        className={` ${
                            open && '-rotate-45 -translate-y-[5px]'
                        } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] fill-black text-black bg-black`}
                    ></div>
                    {/* <FaBars name={open ? 'close' : 'menu'} /> */}
                </div>
                <ul
                    className={` rounded-3xl md:rounded-none bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-[3.5rem]' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8  text-base xl:text-[1.1rem] font-regular md:my-0 my-7"
                        >
                            <Link
                                href={link.link}
                                className={`${
                                    router.asPath == `/${link.name}`
                                        ? 'text-purple-600 font-black '
                                        : ''
                                } text-gray-800 hover:text-purple-500 duration-500`}
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
