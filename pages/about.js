import Head from 'next/head';
import Image from 'next/image';
import CategoryCard from '../components/About-cat';
import { CldImage } from "next-cloudinary";
import { useTheme } from 'next-themes';

export default function About() {
    const { theme, setTheme } = useTheme()
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto">
            <Head>
                <title>About me ✨noru </title>
            </Head>
            <main className=" min-h-screen max-w-screen ">
                <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
                    <div className=" mx-auto flex flex-col select-none ">
                        <h2
                            className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
                        >
                            About
                        </h2>
                        <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
                            <CldImage
                                src={'portfolio/av5_pch3n8'}
                                height={600}
                                width={600}
                                className="rounded-2xl drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                                alt="yasier ansari"
                                priority
                            />
                        </div>
                        <div className="text-center mx-auto mt-8 z-20">
                            <h3 className="mx-auto font-nun font-extrabold text-lg lg:text-xl xl:text-2xl">
                                Yasier Ansari
                            </h3>
                            <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-md lg:text-lg ">
                                NOOB web dev, PRO crastinator
                            </p>
                        </div>
                    </div>
                    <CategoryCard />
                    <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-[450]">
                        <p className="mt-6 mb-12">
                            Hello world 👋 , yasier here, a skilled software developer, web
                            developer & UI-UX designer with a passion for creating intuitive and
                            functional applications. Currently pursuing my 4 year Bachelors program
                            - B.E. and resides in mumbai.
                        </p>

                        {/* <Image
                            src={'/about-gdsc.jpg'}
                            width={500}
                            height={350}
                            className="flex mx-auto rounded-3xl mb-12"
                            alt="gdsc image"
                        /> */}

                        <p className="text-gray-400 font-semibold mb-1">Current</p>

                        <p className="pb-12">
                            A
                            <span className="font-nun font-extrabold mr-1 ">
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

                        <p className="text-gray-400 font-semibold mb-1">Contact</p>

                        <p className="">
                            While I may not be a widely recognized figure, I am readily available
                            for connection on my social media platforms. <br />
                            you can contact me on the gmail{' '}
                            <span
                                onClick={() =>
                                    navigator.clipboard.writeText('contact.yasier@gmail.com')
                                }
                                className="font-nun select-all font-extrabold hover:text-purple-700 cursor-pointer select "
                            >
                                {' '}
                                contact.yasier@gmail.com
                            </span>{' '}
                            or linkedIn{' '}
                            <a
                                href="http://linkedin.com/in/yasier-ansari-711076222"
                                className="font-nun font-extrabold hover:text-purple-700 cursor-pointer select"
                                rel="noopener noreferrer"
                                target="blank"
                            >
                                {' '}
                                yasier-ansari{' '}
                            </a>{' '}
                            <br />
                            Or you can dm me on insta{' '}
                            <a
                                href="https://instagram.com/yasier_70"
                                target="blank"
                                rel="noopener noreferrer"
                                className="font-nun font-extrabold hover:text-purple-700 cursor-pointer select "
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
    );
}
