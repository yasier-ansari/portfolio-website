import { useState, useEffect } from "react";
import { FiGitBranch } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa'
import Link from "next/link";

const Footer = () => {
    const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://api.github.com/repos/yasier-ansari/portfolio-website').then(res2 => res2.json())
            setMetaData({
                star: data.stargazers_count,
                forks: data.forks_count
            })
        }
        getData();
        console.log(metaData)
    }, []);

    return (
        <div className=" flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
            <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
                <Link href="/work" className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold" > work </Link>
                <Link href="/about" className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold" > about </Link>
                <Link href="/tech" className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold" > tech </Link>
                <a href="https://datree.yasier.in/" className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold" > datree </a>
                <Link href="/resume.pdf" target="blank" rel="noreferrer" className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold" > resume </Link>

            </div>
            <a onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} href="https://github.com/yasier-ansari/portfolio-website" target="blank" rel="noreferrer" className="flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 ">

                {/* {
                    !isHovering ? (
                        <p className="font-bold font-space animate-text lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg">
                            Yasier Ansari
                        </p>
                    ) : ( */}
                <div className="relative transition-all linear duration-500   ">
                    <p className="font-bold font-space animate-text duration-300 transition-all linear group-hover:scale-150 group-hover:blur-[6px] group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg">
                        Yasier Ansari
                    </p>
                    {
                        isHovering && (
                            <p className={`absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max dark:text-white/90 text-gray-800 font-bold text-base z-10 `}>
                                Amazing ? ⭐ my Github Repo
                            </p>
                        )
                    }

                </div>
                {/* )
                } */}
                <div className="flex space-x-4 ">
                    <div className="flex dark:group-hover:text-purple-400 group-hover:text-purple-600  space-x-1 items-center "  >
                        <FaRegStar className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-purple-400  group-hover:fill-purple-800 " />
                        <p className="font-semibold text-sm group-hover:font-extrabold " >{metaData.star}</p>
                    </div>
                    <div className="flex  dark:group-hover:text-purple-400 group-hover:text-purple-600 space-x-1 items-center "  >
                        <FiGitBranch className="h-4 w-4 group-hover:stroke-[2.2px]  dark:group-hover:stroke-purple-400 group-hover:stroke-purple-800 " />
                        <p className="font-semibold text-sm group-hover:font-extrabold " >{metaData.forks}</p>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default Footer;
