import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import { SiJavascript, SiCss3, SiGithub } from 'react-icons/si';
import wordle1 from '../../public/wordle-1.png';

const Port = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title>wordle ✨noru </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[21rem] ">
                        <Image
                            src={wordle1}
                            fill
                            placeholder="blur"
                            loading="lazy"
                            alt="work info"
                            className="rounded-2xl mx-auto border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiJavascript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiCss3 className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Wordle Clone
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        As a creative individual with a passion for design, I couldn&apos;t resist
                        the opportunity to dive into the world of wordle and create my own project
                        while the game was still at its peak of popularity. I was excited to explore
                        the various possibilities of the wordle platform, and I was determined to
                        create something that was both visually stunning and professional. The
                        process was easy and rewarding as I was able to reverse engineer its design
                        system.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-[450]">
                        I used HTML, CSS, Javascript and made a concrete and simple game logic which
                        was the backbone of wordle. The end result was a seamless and engaging
                        experience that truly captured the essence of the wordle game.
                    </p>
                    <div className="grid grid-cols font-bold md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari/Wordle"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://yasier-ansari.github.io/Wordle/"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                live website{' '}
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[80%] md:w-[65%] lg:w-[50%] mx-auto h-28 md:h-40 lg:h-48 -mb-6 md:mb-0 xl:mb-12  ">
                        <Image
                            src={wordle1}
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

export default Port;
