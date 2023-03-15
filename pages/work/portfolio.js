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
import portMain from '../../public/port.png';
import gdsc1 from '../../public/gdsc-3.png';

const Port = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title>portfolio ✨ noru </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-80 ">
                        <Image
                            src={portMain}
                            fill
                            placeholder="blur"
                            loading="lazy"
                            alt="work info"
                            className="rounded-2xl mx-auto border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiJavascript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <IoLogoReact className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiNextdotjs className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Portfolio Website
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        After years procrastinating & neglecting the importance of having a
                        professional portfolio, I finally realized the value it holds in terms of
                        showcasing my skills and experiences to potential employers and clients. I
                        dedicated myself to creating a portfolio website that would effectively
                        highlight my abilities and achievements.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        However, I soon realized that the process of creating a portfolio website is
                        not as simple as I had imagined. I spent a significant amount of time
                        researching and experimenting with different technologies and frameworks,
                        trying to find the perfect combination that would suit my needs and
                        preferences. I wanted to create a website that was not only visually
                        appealing, but also easy to navigate and use.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        The result was a website that I am quite proud of, despite its rough edges.
                        It&apos;s a jumbled yet sweet thing that showcases my past projects, my
                        skills, and my experiences in a coherent and organized manner. I&apos;m
                        confident that this portfolio will help me in my search for internships and
                        job opportunities in the future.
                    </p>
                    <div className="grid grid-cols font-bold md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari/portfolio-website"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p
                                onClick={() => {
                                    alert('Youre already on this site 🤨');
                                }}
                            >
                                live website{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Port;
