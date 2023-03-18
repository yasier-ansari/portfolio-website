import Head from 'next/head';
import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';
import Experience from '../components/Experience';
import Link from 'next/link';
import { CldImage } from "next-cloudinary";
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <div className=" px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[90rem] ">
            <Head>
                <title>noru ✨ web dev </title>

            </Head>
            <div className="max-w-full lg:min-h-screen">
                <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
                    <Blob />
                    <div className=" flex flex-col justify-center  lg:flex-row md:pt-12 lg:space-x-20 items-center lg:justify-between">
                        <div className="flex flex-col md:-mt-12 lg:basis-[50%] space-y-12 ">
                            <div className="flex mt-20 -mb-3 -space-x-0 items-end justify-center lg:justify-start">
                                <h2 className="font-space animate-text bg-gradient-to-r selection:text-gray-500 dark:selection:text-white/80 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                                    Yasier{' '}
                                </h2>
                                <p className="wave text-2xl select-none sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl origin-bottom-right " >
                                    👋🏻
                                </p>
                                {/* <p className="select-none rounded-2xl px-3 py-0 dark:bg-purple-500 bg-purple-300 font-semibold text-base">
                                    yasier
                                </p> */}
                            </div>
                            <p className="mt-12 font-medium tracking-wide  base ">
                                web developer,‎ <span className="font-bold text-blue-400 ">G</span>
                                <span className="font-bold text-red-400">o</span>
                                <span className="font-bold text-yellow-500">o</span>
                                <span className="font-bold text-blue-400">g</span>
                                <span className="font-bold text-green-400">l</span>
                                <span className="font-bold text-red-400">e</span> ‎DSC Web Co-Lead,
                                UI/UX designer and a lifelong learner based in{' '}
                                <span className="font-[900] select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded-full px-2 py-[0.05rem] ">
                                    ‎India‎
                                </span>
                                {/* with a love for all things colorful & creative. A lifelong learner
                                who&apos;s always looking for ways to deepen his expertise in
                                technology and coding. When not coding, ✨cats and ✨books are my
                                escape plan. */}
                                with a love for all things colorful & creative. When not coding,
                                🐈‍⬛ cats and 📚books are my escape plan.
                            </p>
                        </div>
                        {/* <div className="lg:basis-[40%] pt-6  select-none "> */}

                        <CldImage
                            priority
                            src="portfolio/av5_pch3n8"
                            width="600"
                            height="400"
                            alt='main image'
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            className=" w-60 h-60 mt-12 md:mt-20 lg:mt-0 animate-heroBlob dark:border-white/60 border-black/30 border-[5px] md:w-80 md:h-80 lg:w-[20rem] lg:h-[20rem] xl:w-[21rem] xl:h-[21rem] "
                        />

                        {/* </div> */}
                    </div>
                    <div className="md:flex relative mx-auto justify-center items-center w-12 hidden md:my-16 lg:mt-0  ">
                        <div
                            onClick={() => {
                                window.scrollTo(0, 520);
                            }}
                        >
                            <div id="wrapper-inner">
                                <div id="scroll-down">
                                    <span className="arrow-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Experience />
                <div className="mt-28 mx-auto ">
                    {/* <Image src={url("yasier/ai_xetglq")} blurDataURL={blurredUrl("yasier/ai_xetglq")} width={800} height={420} alt="dunno" /> */}
                    <Contact />
                </div>
            </div>
        </div>
    );
}
