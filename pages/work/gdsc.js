import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import {
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiSolidity,
    SiGithub,
} from 'react-icons/si';
import gdscMain from '../../public/gdsc-main.png';
import gdsc1 from '../../public/gdsc-3.png';

const GDSC = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title> GDSC ✨ noru </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[21rem] ">
                        <Image
                            src={gdscMain}
                            placeholder="blur"
                            loading="lazy"
                            fill
                            alt="work info"
                            className="rounded-2xl mx-auto border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 text-purple-800 flex w-[50%] mx-auto flex-row justify-center space-x-16 md:space-x-20">
                        <SiJavascript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <IoLogoReact className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Google DSC Website
                    </h2>{' '}
                    <p className="mt-8 text-xs tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        Being the Web Co-Lead of campus GDSC, I had the responsibility of making the
                        website for the marketing and memeber gathering purpose.The requirements
                        were to make a simple , minimalist yet elegant website that will have the
                        same color palette provided by the Google Team.
                    </p>
                    <p className="mt-8 text-xs tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        I took on the task of designing and developing the website, utilizing modern
                        web development technologies such as ReactJs & Tailwindcss. I worked closely
                        with the Google DSC Web Team to ensure that the website matched color
                        palette. Additionally, I implemented a section for displaying upcoming
                        events and announcements. Overall, my goal was to create a website that
                        effectively conveyed the message and mission of our organization, while also
                        being user-friendly and easy to navigate.
                    </p>
                    <div className="grid grid-cols font-bold md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/GDSC-MHSSCE/GDSC-MHSSCE"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://gdsc-mhssce.github.io/GDSC-MHSSCE"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                live website{' '}
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[80%] md:w-[65%] lg:w-[50%] mx-auto h-28 md:h-40 lg:h-48 -mb-6 md:mb-0 xl:mb-12  ">
                        <Image
                            src={gdsc1}
                            fill
                            placeholder="blur"
                            loading="lazy"
                            className="object-cover rounded-lg shadow-2xl drop-shadow-lg border-2 "
                            alt="work-info-gif"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GDSC;
