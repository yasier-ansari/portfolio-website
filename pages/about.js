import Head from 'next/head';
import Image from 'next/image';
import CategoryCard from '../components/About-cat';
import aboutImage from '../public/image.png'
import { useTheme } from 'next-themes';
import { NextSeo } from "next-seo";
import seoConfig from "../utils/seoConfig";

export default function About() {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <NextSeo {...seoConfig['/about']} />
            <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
                <main className="  max-w-screen ">
                    <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
                        <div className=" mx-auto flex flex-col ">
                            <h2
                                className={`mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold`}
                            >
                                About
                            </h2>
                            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
                                <Image
                                    src={aboutImage}
                                    placeholder="blur"
                                    height={600}
                                    width={600}
                                    className="rounded-2xl select-none drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                                    alt="yasier ansari"
                                    priority
                                />
                            </div>
                            <div className="text-center mx-auto mt-8 z-20">
                                <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
                                    Yasier Ansari
                                </h3>
                                <p className="text-gray-400 font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
                                    NOOB web dev, PRO crastinator
                                </p>
                            </div>
                        </div>
                        <CategoryCard />
                        <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-normal dark:text-white text-gray-900 ">
                            <p className="mt-6 mb-12">
                                Hello world 👋 , yasier here, a skilled software developer, web
                                developer & UI-UX designer with a passion for creating intuitive and
                                functional applications with clean code advocacy. Currently pursuing my 4 year Bachelors program
                                - B.E. and resides in mumbai.
                            </p>

                            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">Current</p>

                            <p className="pb-12">
                                A
                                <span className=" font-semibold mr-1 ">
                                    <span className=" text-blue-400 ml-1">G</span>
                                    <span className=" text-red-400">o</span>
                                    <span className=" text-yellow-500">o</span>
                                    <span className=" text-blue-400">g</span>
                                    <span className=" text-green-400">l</span>
                                    <span className=" text-red-400 mr-1">e</span>
                                    DSC Web Co-Lead
                                </span>
                                for college campus, I have the knowledge and expertise to tackle a wide
                                range of projects. From developing custom websites to optimizing
                                existing systems & making Robust Machine Learning Model. Whether working
                                on a big project or small fix, I always bring my A-game with healthy
                                dose of creativity. Most of my time is spent in building dynamic
                                websites, design system, writing Engg assignments and searching for new
                                technology and getting acquainted with it.
                            </p>

                            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">Contact</p>

                            <p className="">
                                While I may not be a widely recognized figure, I am readily available
                                for connection on my social media platforms. <br />
                                you can contact me on the gmail{' '}
                                <span
                                    onClick={() =>
                                        navigator.clipboard.writeText('contact.yasier@gmail.com')
                                    }
                                    className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                                >
                                    {' '}
                                    contact.yasier@gmail.com
                                </span>{' '}
                                or linkedin{' '}
                                <a
                                    href="http://linkedin.com/in/yasier-ansari-711076222"
                                    className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                                    rel="noopener noreferrer"
                                    target="blank"
                                >
                                    {' '}
                                    yasier-ansari{' '}
                                </a>{' '}
                                Or you can dm me on insta{' '}
                                <a
                                    href="https://instagram.com/yasier_70"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className=" font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                                >
                                    {' '}
                                    @yasier_77{' '}
                                </a>{' '}
                            </p>
                        </div>
                        <div className="flex mx-auto justify-center mt-16 select-none ">
                            ✨
                            <span className="font-black font-app text-lg md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6 ">
                                thanks for visiting
                            </span>
                            ✨
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
