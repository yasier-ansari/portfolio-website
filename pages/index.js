import Head from 'next/head';
import Image from 'next/image';
import Contact from '../components/Contact';
import Blob from '../components/Blob';
import Experience from '../components/Experience';
import Link from 'next/link';

export default function Home() {
    // const cord = window.innerHeight;
    // const goToCord = cord - 20;
    return (
        <div className=" px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-6xl ">
            <Head>
                <title>noru ✨ web dev </title>

            </Head>
            <div className="max-w-full lg:min-h-screen">
                <div className="lg:h-screen xl:h-max max-w-5xl mx-auto">
                    <Blob />
                    <div className=" flex flex-col justify-center  lg:flex-row lg:py-12 lg:space-x-20 items-center lg:justify-between">
                        <div className="flex flex-col lg:basis-[50%] space-y-12 ">
                            <div className="flex mt-20 -mb-3 -space-x-0 items-end justify-center lg:justify-start">
                                <h2 className="font-space animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                                    Noru_{' '}
                                </h2>
                                <p className="select-none rounded-2xl px-3 py-0 bg-purple-300 font-semibold text-base">
                                    yasier
                                </p>
                            </div>
                            <p className="mt-12 font-medium tracking-wide text-base ">
                                web developer,‎ <span className="font-bold text-blue-400 ">G</span>
                                <span className="font-bold text-red-400">o</span>
                                <span className="font-bold text-yellow-500">o</span>
                                <span className="font-bold text-blue-400">g</span>
                                <span className="font-bold text-green-400">l</span>
                                <span className="font-bold text-red-400">e</span> ‎DSC Web Co-Lead,
                                UI/UX designer and a lifelong learner based in{' '}
                                <span className="font-[900] select-none animate-text bg-gradient-to-br from-[#ff911b] via-[#fff4f4] text-border2 to-[#43ff36] rounded-full px-2 py-[0.05rem] ">
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
                        <div className="lg:basis-[40%] pt-6 md:pt-0 select-none ">
                            <Image
                                src={'/main.png'}
                                width={600}
                                height={400}
                                alt={'main image'}
                                className=" w-60 h-52 md:w-80 md:h-72 lg:w-[20rem] lg:h-[16rem] xl:w-[24rem] xl:h-[16rem] "
                            />
                        </div>
                    </div>
                    <div className="md:flex relative mx-auto justify-center items-center w-12 hidden md:mt-16 lg:-mt-8  ">
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
                    <Contact />
                </div>
            </div>
        </div>
    );
}
