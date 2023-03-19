import { CldImage } from "next-cloudinary";
import Head from 'next/head';
import Image from 'next/image';
import { IoBrowsersOutline } from 'react-icons/io5';
import { SiReact, SiGithub, SiTailwindcss } from 'react-icons/si';

const Cryplog = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <Head>
                <title> Cryplog ☁️ Yasier Ansari </title>
            </Head>
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-[21rem] ">
                        <CldImage
                            src={'portfolio/cryplog-main_jgcuua'}
                            fill
                            // placeholder="blur"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            loading="lazy"
                            alt="Cryplog info"
                            className="rounded-2xl mx-auto object-cover border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10 dark:text-purple-300 text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiReact className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Cryplog 🪙
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white">
                        Discover the exciting world of cryptocurrencies with our sleek and intuitive information hub. Get valuable insights on various digital currencies, including prices, market capitalization, and trading volumes. Our cutting-edge technology and minimalist design keep you up-to-date on the latest trends and developments in the crypto market, whether you&apos;re a seasoned investor or just starting out. So, explore our website today and stay ahead of the game!

                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white">
                        Cryplog contains crypto log - an extensive list of all meta data for multiple crypto coins. It even comes with fully fledged search and sort functionality that lets you surf through different coins and gives list of all coins containing similar searched items. As demanded by any modern sites, cryplog also comes with dark mode. Less eye strain and more crypto searching is just a click away with our minimal contrasted dark mode.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal text-gray-900 dark:text-white">
                        Also contains Individual Pages that gives detailed information about a particular coin. Gives price data and displays price, volume chart for better predictability. Includes Err404 /page and comes with robust error handling in API fetching using CoinGecko API.
                    </p>
                    <div className="grid grid-cols font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-12 mb-8">
                        <div className="hover:text-purple-400 flex mx-aut space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari/cryplog"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://cryplog.vercel.app/"
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

export default Cryplog;
