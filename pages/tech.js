import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
// import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import TechCard from '../components/TechCard';

export default function Tech() {
    const data = [
        {
            title: 'Vs Code',
            id: 0,
            main: '/vscode-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Slack',
            id: 1,
            main: '/slack-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'Discord',
            id: 2,
            main: '/discord-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'Sky of light',
            id: 3,
            main: '/sky-game.jpeg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'zen',
            bg: '#ebddff',
            text: '#55209a',
        },
        {
            title: 'Github',
            id: 4,
            main: '/github-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Next-js',
            id: 5,
            main: '/nextjs-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Osu!',
            id: 6,
            main: '/osu-logo.png',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'zen',
            bg: '#ebddff',
            text: '#55209a',
        },
        {
            title: 'Typescript',
            id: 7,
            main: '/typescript-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Figma',
            id: 8,
            main: '/figma-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'design',
            bg: '#ffaa5a',
            text: '#814404',
        },
        {
            title: 'Notion',
            id: 9,
            main: '/notion-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'daily',
            bg: '#cfffc8',
            text: '#336e09',
        },
        {
            title: 'jetBrains IDEs',
            id: 10,
            main: '/jetbrains-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'MongoDB',
            id: 11,
            main: '/mongodb-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'code',
            bg: '#ffbce0',
            text: '#ff00bf',
        },
        {
            title: 'Canva',
            id: 12,
            main: '/canva-icon.svg',
            desc: 'lorem ipsum isnt just fummy data, its amount of english a developer needs to become a developer',
            tag: 'design',
            bg: '#ffaa5a',
            text: '#814404',
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
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
            <Head>
                <title>noru ✨ tools I use ✨ </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-24 font-nun flex flex-col mx-auto">
                    <h2 className="bg-gradient-to-r from-[#4ce3e1] via-[#be45ff] to-[#ff8a2a] bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
                        Tools I use
                    </h2>
                    <p className="mt-8 text-sm md:text-base lg:text-lg xl:text-xl ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, et. Placeat
                        quam quod blanditiis, dignissimos praesentium a provident ipsa. Quo officiis
                        perspiciatis soluta, possimus quidem esse quia assumenda voluptate
                        veritatis!
                    </p>
                </div>
                <div className="flex mx-auto mt-12  space-x-4 md:space-x-6 lg:space-x-10 items-center">
                    <button
                        className="font-space group bg-[#c7dada] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
                        onClick={leftArrow}
                    >
                        <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
                    </button>
                    <div className="bg-gradient-to-tr from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec] flex p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-max lg:space-x-6 transition-all duration-700 ease-linear ">
                        <div className="relative basis-[30%] lg:basis-[25%] h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32  lg:w-32 p-2 sm:p-3 md:p-4 lg:p-6 object-contain ">
                            <div className=" flex mx-auto">
                                <Image
                                    src={data[idNumber].main}
                                    alt="seller6"
                                    fill
                                    className="p-1 sm:p-2 md:p-3 lg:p-4 flex mx-auto object-contain transition ease-in-out scale-125 duration-1000 "
                                />
                            </div>
                        </div>
                        <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
                            <div className="flex mb-1 justify-between items-center ">
                                <h3 className=" text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-space font-semibold ">
                                    {data[idNumber].title}
                                </h3>
                                <div
                                    className={` bg-[${data[idNumber].bg}] text-[${data[idNumber].text}] text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max font-nun font-bold`}
                                >
                                    {data[idNumber].tag}
                                </div>
                            </div>
                            <p className=" text-[0.6rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-base font-[500] ">
                                {data[idNumber].desc}
                            </p>
                        </div>
                    </div>
                    <button
                        className="bg-[#fce4fe] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
                        onClick={rightArrow}
                    >
                        <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
                    </button>
                </div>
                <div className=" mt-12 pb-12 grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
                    {data.map(function (obj, i) {
                        return <TechCard id={obj.id} main={obj.main} key={i} changeId={changeId} />;
                    })}
                </div>
            </main>
        </div>
    );
}
