import { CldImage } from "next-cloudinary";
import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiGithub, SiTailwindcss } from 'react-icons/si';

const Datree = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title>da-tree ✨noru </title>

            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[21rem] ">
                        <CldImage
                            src={'portfolio/datree_amgert'}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            alt="datree info"
                            className="rounded-2xl mx-auto object-cover border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 dark:text-purple-300 text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiTypescript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiNextdotjs className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Da-tree 🌲
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white ">
                        Introducing da-tree, the next-generation linktree alternative that lets coders and tech enthusiasts build their own custom linktree-style websites in a breeze. No more generic templates or clunky interfaces - da-tree gives you the power to spin up a da-tree website by  <span class="font-semibold">simply changing the JSON file.</span>

                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white ">
                        Solo made this website using my usual fav, and can proudly say that this went out way better than expected. <span className="font-semibold" >Made in just 2 days </span> in MLH hackathon, the purpose of this website was to make the newbie coders excited and make them learn nextjs,tailwindcss which are the tech of future. They are surely going to take over every tech stack in web development as one can see that they occupy more than 60% of the current market. Simple yet functional website to connect with the masses and especially fellow coders.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white ">
                        Due to the only dependency being the necessity of technical knowledge, future scope could become to add a database server and custom server for every user to better take care of his/her customizability without the need of manually nextJs and tailwindCSS. Once we do that, da-tree would be competing in the general audience, which as of now is only for programmers or someone with some programming knowledge

                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white ">
                        Whether you&apos;re looking to showcase your portfolio, promote your business, or share your passions with the world, da-tree makes it easier than ever. So why wait? Showcase the world your potential through da-tree today!
                    </p>
                    <div className="grid grid-cols font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-12 mb-8">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari/da-tree"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://datree.yasier.in/"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                live website{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Datree;
