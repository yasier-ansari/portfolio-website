import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
// import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import TechCard from '../components/TechCard';
import { NextSeo } from "next-seo";
import seoConfig from "../utils/seoConfig";

export default function Tech() {
    const data = [
        {
            title: 'Vs Code',
            id: 0,
            main: '/vscode-icon.svg',
            desc: 'Best coding IDE to ever exist,comes with tons of customization',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'Slack',
            id: 1,
            main: '/slack-icon.svg',
            desc: 'A social platform for slick coders and nightly creatures called programmers',
            tag: 'daily',
            bg: 'bg-emerald-50',
            text: 'text-emerald-700',
        },
        {
            title: 'Discord',
            id: 2,
            main: '/discord-icon.svg',
            desc: 'Discord ultimate hangout spot, home to many bots such as midjourney ',
            tag: 'daily',
            bg: 'bg-emerald-50',
            text: 'text-emerald-700',
        },
        {
            title: 'Sky of light',
            id: 3,
            main: '/sky-game.jpeg',
            desc: 'A world of beauty and serenity, crafted and accompanied by soothing music ',
            tag: 'zen',
            bg: 'bg-purple-100',
            text: 'text-purple-500',
        },
        {
            title: 'Github',
            id: 4,
            main: '/github-icon.svg',
            desc: `A developer's go-to platform for collaborating and showcasing their code`,
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'Next-js',
            id: 5,
            main: '/nextjs-icon.svg',
            desc: 'The GOAT metaframework for reactJs that comes with SSR and other features',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'Osu!',
            id: 6,
            main: '/osu-logo.png',
            desc: 'OG F2P anime rhythm game coming way back from 2007, one of my favorite ',
            tag: 'zen',
            bg: 'bg-purple-100',
            text: 'text-purple-500',
        },
        {
            title: 'Typescript',
            id: 7,
            main: '/typescript-icon.svg',
            desc: 'SuperScript of Javascript, made by microsoft with robust type safety',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'Figma',
            id: 8,
            main: '/figma-icon.svg',
            desc: 'A boon for webapp designers, from wireframe to animation, it has it all ',
            tag: 'design',
            bg: 'bg-orange-100',
            text: 'text-orange-600',
        },
        {
            title: 'Notion',
            id: 9,
            main: '/notion-icon.svg',
            desc: 'The most used, well designed, versatile and professional productivity app',
            tag: 'daily',
            bg: 'bg-emerald-50',
            text: 'text-emerald-700',
        },
        {
            title: 'jetBrains IDEs',
            id: 10,
            main: '/jetbrains-icon.svg',
            desc: 'No one can beat JB in IDE market, especially PyCharm and IntelliJ ',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'MongoDB',
            id: 11,
            main: '/mongodb-icon.svg',
            desc: 'A scalable and reliable No-SQL database solution for professional use',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'Canva',
            id: 12,
            main: '/canva-icon.svg',
            desc: ' Free and with ton of templates, a prefect alternative of photoshop ',
            tag: 'design',
            bg: 'bg-orange-100',
            text: 'text-orange-600',
        },
        {
            title: 'Firebase',
            id: 13,
            main: '/firebase-icon.svg',
            desc: 'helps developers to build, manage, and grow their apps with ease ',
            tag: 'code',
            bg: 'bg-blue-50',
            text: 'text-blue-500',
        },
        {
            title: 'MonkeyType',
            id: 14,
            main: '/mt-icon.png',
            desc: 'minimal and powerful tool to track and improve your  typing habits',
            tag: 'zen',
            bg: 'bg-purple-100',
            text: 'text-purple-500',
        },
    ];
    const [idNumber, setIdNumber] = useState(0);
    const changeId = (id) => {
        setIdNumber(id);
    };
    const rightArrow = () => {
        if (idNumber + 1 >= data.length) {
            setIdNumber(0);
        } else {
            setIdNumber(idNumber + 1);
        }
    };
    const leftArrow = () => {
        if (idNumber === 0) {
            setIdNumber(data.length - 1);
        } else {
            setIdNumber(idNumber - 1);
        }
    };
    return (
        <>
            <NextSeo {...seoConfig['/tech']} />
            <main className="px-6 xs:px-10 sm:px-20 md:px-28 lg:mb-12 lg:px-36 xl:px-52 mx-auto max-w-7xl">
                <div className="pt-12 flex flex-col mx-auto">
                    <h2 className="bg-gradient-to-tr dark:selection:text-white/80 selection:text-black/70 to-yellow-400 from-red-500 bg-clip-text text-transparent items-center mx-auto text-3xl xs:text-4xl lg:text-5xl xl:text-6xl  font-out font-extrabold ">
                        Tech-stack
                    </h2>
                    <p className="mt-8 text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg xl:text-xl md:text-[1.15rem] ">
                        Just like any other dev, I also spend more time searching and
                        experimenting tools than actually coding some senseful things 😎
                    </p>
                </div>
                <div class="flex mt-6 xs:mt-8 sm:hidden justify-end space-x-5 xs-space-x-6">
                    <button
                        className=" visible sm:hidden font-space group bg-[#c7dada] dark:bg-[#939f9f40] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
                        onClick={leftArrow}
                    >
                        <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
                    </button>
                    <button
                        className="visible sm:hidden bg-[#fce4fe] dark:bg-[#a995ab40] dark:hover:bg-[#7a747b40] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
                        onClick={rightArrow}
                    >
                        <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
                    </button>
                </div>
                <div className="flex mx-auto justify-between mt-3 xs:mt-4 sm:mt-12 sm:space-x-4 xs:w-[80%] md:w-full md:space-x-12 max-w-3xl lg:space-x-16 items-center">
                    <button
                        className=" hidden sm:block group bg-[#c7dada] dark:bg-[#939f9f30] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
                        onClick={leftArrow}
                    >
                        <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
                    </button>
                    <div className="bg-gradient-to-tr dark:from-[#dbfefe20] dark:via-[#f9f2ff20] dark:to-[#fff2ec30] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6  rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 xs:h-28 sm:h-32 w-full md:h-max lg:space-x-6 transition-all duration-700 ease-linear max-w-2xl ">
                        <div className=" md:basis-[25%] rounded-2xl ">
                            <div className=" flex mx-auto w-20 h-20 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32  rounded-lg relative bg-white">
                                <Image
                                    src={data[idNumber].main}
                                    alt="tech"
                                    fill
                                    //                             sizes="(max-width: 768px) 100vw,
                                    //   (max-width: 1200px) 50vw,
                                    //   33vw"
                                    className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full object-fill rounded-xl "
                                />
                            </div>
                        </div>
                        <div className="w-full mx-auto transition-all duration-500 ">
                            <div className="flex mb-1 justify-between items-center ">
                                <h3 className=" text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-deca tracking-wide ">
                                    {data[idNumber].title}
                                </h3>
                                <div
                                    className={` ${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                                >
                                    {data[idNumber].tag}
                                </div>
                            </div>
                            <p className="text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%] ">
                                {data[idNumber].desc}
                            </p>
                        </div>
                    </div>
                    <button
                        className="hidden sm:block bg-[#fce4fe] dark:bg-[#a995ab30] dark:hover:bg-[#7a747b40] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
                        onClick={rightArrow}
                    >
                        <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
                    </button>
                </div>
                <div className=" mt-12 pb-12 grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
                    {data.map(function (obj, i) {
                        return <TechCard id={obj.id} alt={obj.title} main={obj.main} key={i} changeId={changeId} />;
                    })}
                </div>
            </main>
        </>
    );
}
